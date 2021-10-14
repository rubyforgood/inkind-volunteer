import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { updateUserMutation } from "graphql/mutations/UpdateUserMutation"
import { User } from "models/User"
import { Avatar } from "./Avatar"

interface AccountProps {
  user: User;
}

interface VolunteerInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export const EditAccount = ({
  user,
}: AccountProps): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<VolunteerInput>()
  const [updateUser, { loading }] = useMutation(updateUserMutation)
  const history = useHistory()
  const onSubmit = (data: VolunteerInput) => {
    updateUser({ variables: { data }}).then(() => {
      history.push("/account/edit/success")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex pt-5 pb-10 px-8 text-gray-600">
        <div className="flex flex-1 self-end">
          <Link to="/account">Cancel</Link>
        </div>
        <div className="flex flex-1 justify-center self-end">
          <h2 className="text-xl">Profile</h2>
        </div>
        <div className="flex flex-1 justify-end self-end">
          <input type="submit" value={loading ? "Saving..." : "Done"} className="bg-transparent" />
        </div>
      </div>

      <Avatar initials={user.initials} size={20} />

      <section className="text-left px-8 pt-10">
        <div className="mb-3">
          <input placeholder="First Name" defaultValue={user.firstName} {...register("firstName", { required: true })} className="form-field" />
          <small>{errors.firstName?.type === "required" && "First name is required"}</small>
        </div>
        <div className="mb-3">
          <input placeholder="Last Name" defaultValue={user.lastName} {...register("lastName", { required: true })} className="form-field" />
          <small>{errors.lastName?.type === "required" && "Last name is required"}</small>
        </div>
        <div className="mb-3">
          <input placeholder="Email" defaultValue={user.email || ""} type="email" {...register("email")} className="form-field" />
        </div>
        <div className="mb-3">
          <input placeholder="Phone Number" defaultValue={user.phoneNumber || ""} type="phone" {...register("phoneNumber")} className="form-field" />
        </div>
      </section>
    </form>
  )
}
