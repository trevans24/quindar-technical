"use client"; // this is a client component 👈🏽
import styles from "./page.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { Table } from "antd"



export default function Home() {
  const [data, setData] = useState<any[]>([])

  const columns = [
    {
      title: 'Mission Name',
      dataIndex: 'mission_name',
      key: 'mission_name',
    },
    {
      title: 'Launch Date',
      dataIndex: 'launch_date_local',
      key: 'launch_date_local',
    }
  ];

  useEffect(() => {
    async function fetchData() {
      const client = new ApolloClient({
        uri: 'https://spacex-production.up.railway.app/graphql',
        cache: new InMemoryCache()
      });
      const { data } = await client.query({
        query: gql`
          query GetLaunches {
            launches(limit: 100) {
              id
              mission_name
              launch_date_local
            }
          }
        `
      });
      setData(data["launches"]);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Table columns={columns} dataSource={data} />
      </div>
    </main>
  );
}
