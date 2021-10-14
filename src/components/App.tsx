import { QueryClient, QueryClientProvider } from "react-query"
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"
import { authenticatedHttpLink, setToken } from "lib/authentication"
import { Landing } from "components/Landing"

const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
if (params.token) {
  setToken(params.token)
}

const queryClient = new QueryClient()

const link = createHttpLink({
  uri: "http://localhost:3001/graphql",
  credentials: "include",
})

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: authenticatedHttpLink.concat(link),
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
