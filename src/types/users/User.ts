import { Email } from "./Email"
import { Login } from "./Login"
import { Name } from "./Name"

export interface UserProps {
  login: Login
  name: Name
  email: Email
}
