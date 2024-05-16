import data from "../data.json"
import css from "./Statistics.module.css"

export const StatisticsTitle = () => {
  return (
<section className="statistics">
    {data.title && <h2 className={css.title}>{data.title}</h2>}
  </section>
  )
  }