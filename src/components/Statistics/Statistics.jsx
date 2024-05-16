import { StatisticsStats } from "./StatisticsStats"
import { StatisticsTitle } from "./StatisticsTitle"
import css from "./Statistics.module.css"

export const Statistics = () => {
  return (
    <section className = {css.statistics}>
      <StatisticsTitle />
      <StatisticsStats />
    </section>
  )
}