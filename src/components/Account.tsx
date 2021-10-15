import { User } from "models/User"
import { Link } from "react-router-dom"

import { setToken } from "lib/authentication"
import { Avatar } from "./partials/Avatar"

interface AccountProps {
  user: User;
}

export const Account = ({
  user,
}: AccountProps): JSX.Element => {

  const clearSession = () => {
    setToken("")
    window.location.reload()
  }

  return (
    <>
      <div className="flex pt-5 pb-10 px-8 text-gray-600">
        <div className="flex flex-1 self-end">
          <button
              type="button"
              className="btn-link"
              onClick={clearSession}
          >
                Logout
          </button>
        </div>
        <div className="flex flex-1 justify-center self-end">
          <h2 className="text-xl">Profile</h2>
        </div>
        <div className="flex flex-1 justify-end self-end">
          <Link to="/account/edit">Edit</Link>
        </div>
      </div>

      <Avatar initials={user.initials} size={20} />

      <section className="text-center px-8 pt-10">
        <div className="px-4 py-3 border-gray-400 border rounded bg-white text-gray-600 mb-3">{user.firstName}</div>
        <div className="px-4 py-3 border-gray-400 border rounded bg-white text-gray-600 mb-3">{user.lastName}</div>
        <div className="px-4 py-3 border-gray-400 border rounded bg-white text-gray-600 mb-3">{user.email}</div>
        <div className="px-4 py-3 border-gray-400 border rounded bg-white text-gray-600 mb-3">{user.phoneNumber}</div>
      </section>

      <h2 className="text-xl text-center mt-14">Security</h2>
      <Link to="/account/edit-password" className="btn mt-5">Change Password</Link>
    </>
  )
}
