import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"
import { Landing } from "components/Landing"

const queryClient = new QueryClient()

const link = createHttpLink({
  uri: "http://localhost:3001/graphql",
  credentials: "include",
})

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <Landing />
      </QueryClientProvider>
    </ApolloProvider>
  )
}

export default App
