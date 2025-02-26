import { useQuery, gql } from "@apollo/client"

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 5) {
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
    launchesUpcoming(limit: 5) {
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
  return <div>working</div>
}

export default LaunchList
