import { Profile } from "components/Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { Transaction } from "./Transaction/Transaction"

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
      <Transaction />
    </>
     
  )
}