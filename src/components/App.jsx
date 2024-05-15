import { Profile } from "Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { StatisticsTitle } from "./Statistics/StatisticsTitle"

export const App = () => {
  return (
    <>
      <Profile />
      <StatisticsTitle />
      <Statistics />
    </>
     
  )
}