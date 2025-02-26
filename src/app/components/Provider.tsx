"use client"
import { ApolloProvider } from "@apollo/client"
import client from "../api/apolloClient"

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Provider
