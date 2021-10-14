import { setContext } from '@apollo/client/link/context'

const TokenKey = 'in-kind-app-token'
const getToken = () => localStorage.getItem(TokenKey)
const setToken = (token: string) => localStorage.setItem(TokenKey, token)

const authenticatedHttpLink = setContext((_, { headers }) => {
  const token = getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export { getToken, setToken, authenticatedHttpLink }
