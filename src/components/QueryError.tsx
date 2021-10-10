export const QueryError = ({ error }: { error: unknown }): JSX.Element => (
  <pre>
    <code>ERROR: {JSON.stringify(error, null, "  ")}</code>
  </pre>
)
