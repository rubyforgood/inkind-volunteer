import { User } from "models/User"

import { Avatar } from "./Avatar"

interface AccountProps {
  user: User;
}

export const Account = ({
  user,
}: AccountProps): JSX.Element => {
  return (
    <>
      <div className="flex mt-5 mb-10 px-8 text-gray-600">
        <div className="flex flex-1 self-end">
          <a href="#">Logout</a>
        </div>
        <div className="flex flex-1 justify-center self-end">
          <h2 className="text-xl">Profile</h2>
        </div>
        <div className="flex flex-1 justify-end self-end">
          <a href="#">Edit</a>
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
      <a href="#" className="btn mt-5 disabled">Change Password</a>
    </>
  )
}
