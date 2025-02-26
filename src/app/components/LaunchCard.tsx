"use client"
import { useState } from "react"
import { LaunchType } from "../lib/types"
import styles from "./launchCard.module.css"

const LaunchCard = ({
  links,
  mission_name,
  rocket,
  launch_date_utc,
  launch_success,
  details,
}: LaunchType) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.card} onClick={() => setExpanded(!expanded)}>
      <img
        src={links?.mission_patch || "/placeholder.png"}
        alt="Mission Patch"
        className="patch"
      />
      <div className={styles.info}>
        <h3>{mission_name}</h3>
        <p>
          <strong>Rocket:</strong> {rocket.rocket_name}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(launch_date_utc).toLocaleDateString()}
        </p>
        <p>
          <strong>Status:</strong> {launch_success ? "✅ Success" : "❌ Failed"}
        </p>

        {expanded && (
          <div className={styles.details}>
            <p>{details || "No additional details available."}</p>
            {links.article_link && (
              <a href={links.article_link} target="_blank">
                Read more
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default LaunchCard
