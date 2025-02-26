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
}: LaunchType) => (
  <div className={styles.card}>
    <img
      src={links?.mission_patch || "/space-patch.png"}
      alt="Mission Patch"
      className={styles.patch}
    />
    <div className={styles.info}>
      <h3 className={styles.name}>{mission_name}</h3>
      <p>
        <strong>Rocket:</strong> {rocket.rocket_name}
      </p>
      <p>
        <strong>Date:</strong> {new Date(launch_date_utc).toLocaleDateString()}
      </p>
      <p>
        <strong>Status:</strong> {launch_success ? "✅ Success" : "❌ Failed"}
      </p>

      {links.article_link && (
        <div className={styles.details}>
          <a href={links.article_link} target="_blank">
            Read more
          </a>
        </div>
      )}
    </div>
  </div>
)

export default LaunchCard
