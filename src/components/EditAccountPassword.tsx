import { useForm } from "react-hook-form"
import { Link, useHistory } from "react-router-dom"

import { useMutation } from "@apollo/client"
import { updateUserPasswordMutation } from "graphql/mutations/UpdateUserMutation"
import { User } from "models/User"
import { Avatar } from "./partials/Avatar"

interface AccountProps {
  user: User;
}

interface GraphqlInput {
  oldPassword: string;
  password: string;
}

interface FormFields {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}

const getGraphqlInput = (data: FormFields): GraphqlInput => {
  return {
    oldPassword: data.oldPassword,
    password: data.password,
  }
}

export const EditAccountPassword = ({
  user,
}: AccountProps): JSX.Element => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [updateUser, { loading, error }] = useMutation<GraphqlInput>(updateUserPasswordMutation, {
    onCompleted: () => {
      history.push("/account/edit/success?text=Your password was successfully updated.")
    }
  })
  const history = useHistory()
  const newPassword = watch("password")
  const onSubmit = (data: FormFields) => {
    updateUser({ variables: getGraphqlInput(data) })
      .catch((err) => console.log(err))
  }
  const equalsNewPassord = (newPasswordConfirmation: string): boolean | string => {
    return newPassword === newPasswordConfirmation ? true : "Password confirmation does not match"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex pt-5 pb-10 px-8 text-gray-600">
        <div className="flex flex-1 self-end">
          <Link to="/account">Cancel</Link>
        </div>
        <div className="flex flex-1 justify-center self-end">
          <h2 className="text-xl">Password</h2>
        </div>
        <div className="flex flex-1 justify-end self-end">
          <input type="submit" value={loading ? "Saving..." : "Done"} className="bg-transparent" />
        </div>
      </div>

      <Avatar initials={user.initials} size={20} />

      {error && (<p className="text-red-500 mt-10 px-8">{error.message}</p>)}

      <section className="text-left px-8 pt-10">
        <div className="mb-3">
          <input placeholder="Old Password" type="password" {...register("oldPassword", { required: true })} className="form-field" />
          <small>{errors.oldPassword?.type === "required" && "Old password is required"}</small>
        </div>
        <div className="mb-3">
          <input placeholder="New Password" type="password" {...register("password", { required: true })} className="form-field" />
          <small>{errors.password?.type === "required" && "New Password is required"}</small>
        </div>
        <div className="mb-3">
          <input placeholder="Reenter New Password" type="password" {...register("passwordConfirmation", { validate: equalsNewPassord })} className="form-field" />
          <small>{errors.passwordConfirmation?.message}</small>
        </div>
      </section>
    </form>
  )
}
