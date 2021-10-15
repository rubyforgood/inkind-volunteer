import { Link } from "react-router-dom"
import celebrating from "./icons/celebrating.svg"

export const EditAccountSuccess = (): JSX.Element => {
  return (
    <div className="pt-28 text-center text-gray-600">
      <h2 className="text-3xl mb-10">Success!</h2>
      <p className="mb-6">Your profile was successfully updated.</p>
      <p>Return to your <Link to="/account" className="link">profile</Link>.</p>
      <img src={celebrating} className="w-40 m-auto mt-14 transform -rotate-12" />
    </div>
  )
}
