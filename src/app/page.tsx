import styles from "./page.module.css"
import LaunchList from "./components/LaunchList"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <LaunchList />
      </div>
    </main>
  )
}
