// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const QueryError = ({ error }: { error: unknown }) => {
  return (
    <pre>
      <code>ERROR: {JSON.stringify(error, null, "  ")}</code>
    </pre>
  )
}
