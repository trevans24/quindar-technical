"use client"
import { useQuery, gql } from "@apollo/client"
import LaunchCard from "./LaunchCard"
import { LaunchType } from "../lib/types"
import styles from "./launchList.module.css"
import { useMemo, useState } from "react"

const getLaunches = gql`
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
  const [launchType, setLaunchType] = useState("upcoming")
  const { data = {}, loading = true, error } = useQuery(getLaunches)

  const cards = useMemo(() => {
    if (launchType === "upcoming") return data.launchesUpcoming
    if (launchType === "past") return data.launchesPast
    return []
  }, [launchType, data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching launches</p>

  const handleClick = () => {
    if (launchType === "upcoming") return setLaunchType("past")
    return setLaunchType("upcoming")
  }

  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{launchType} Launches</h2>
      <div className={styles.grid}>
        {cards.map((launch: LaunchType) => (
          <LaunchCard key={launch.id} {...launch} />
        ))}
      </div>
      <button className={styles.btn} onClick={handleClick}>
        See {launchType === "upcoming" ? "past" : "upcoming"} Launches
      </button>
    </div>
  )
}

export default LaunchList
