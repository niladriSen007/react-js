import { FC } from "react"
import { UserProps } from "../../types/users/User"

const User: FC<UserProps> = ({ login, name, email }) => {
  return (
    <div>
      <h1>{name.first} {name.last}</h1>
      <p>{email.email}</p>
      <p>{login.uuid}</p>
    </div>
  )
}
export default User