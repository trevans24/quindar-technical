"use client"
import { useQuery, gql } from "@apollo/client"
import LaunchCard from "./LaunchCard"
import { LaunchType } from "../lib/types"
import styles from "./launchList.module.css"

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 6) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_success
      links {
        mission_patch
        article_link
      }
      details
    }
    launchesUpcoming(limit: 6) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_success
      links {
        mission_patch
        article_link
      }
      details
    }
  }
`

const LaunchList = () => {
  const { data, loading, error } = useQuery(GET_LAUNCHES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching launches</p>

  return (
    <div className={styles.list}>
      <h2>Upcoming Launches</h2>
      <div className={styles.grid}>
        {data.launchesUpcoming.map((launch: LaunchType) => (
          <LaunchCard key={launch.id} {...launch} />
        ))}
      </div>
    </div>
  )
}

export default LaunchList
