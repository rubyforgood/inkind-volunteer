import { Link, useLocation } from "react-router-dom"
import celebrating from "./icons/celebrating.svg"

export const EditAccountSuccess = (): JSX.Element => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const text = query.get("text")

  if (!text) {
    throw "Please, specify the text to be shown in a query string param named `text` - i.e. ?text=The Text"
  }

  return (
    <div className="pt-28 text-center text-gray-600">
      <h2 className="text-3xl mb-10">Success!</h2>
      <p className="mb-6">{text}</p>
      <p>Return to your <Link to="/account" className="link">profile</Link>.</p>
      <img src={celebrating} className="w-40 m-auto mt-14 transform -rotate-12" />
    </div>
  )
}
