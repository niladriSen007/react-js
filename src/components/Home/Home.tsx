import { FC, useEffect, useState } from "react"
import { HomeProps } from "../../types/home/Home"
import axios from "axios"
import User from "../users/User"
import { UserProps } from "../../types/users/User"


const Home: FC<HomeProps> = ({ title }) => {
  const [userList, setUserList] = useState<UserProps[]>([])

  const fetchUserLists = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10")
      setUserList(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUserLists()
  }, [])

  return (
    <div>
      {title}
      {
        userList.length > 0 ? userList.map(({ login, email, name }) => (
          <User key={login.uuid} email={email} login={login} name={name} />
        )) : "Fetching users list..."
      }
      <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{}} />
    </div>
  )
}
export default Home