type LinksType = {
  article_link: string
  mission_patch: string
  __typename: string
}

type RocketType = {
  rocket_name: string
  __typename: string
}

export type LaunchType = {
  details: string
  id: string
  launch_date_utc: string
  launch_success?: boolean
  links: LinksType
  mission_name: string
  rocket: RocketType
}
