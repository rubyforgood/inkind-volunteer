import { render, RenderResult } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const renderWithQueryProvider = (children: JSX.Element): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
