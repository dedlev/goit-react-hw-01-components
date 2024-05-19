import data from "../data.json"
import css from "./Statistics.module.css"

export const StatisticsTitle = ({title}) => {
  return (
<section className="statistics">
    {title && <h2 className={css.title}>{title}</h2>}
  </section>
  )
  }