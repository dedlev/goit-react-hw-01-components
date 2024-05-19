import data from "../data.json"
import css from "./Statistics.module.css"
import {generateRandomColor} from "./RandomColor.js"

export const StatisticsStats = ({id, label}) => {
  return (
    <ul className={css.stat_list}>
      {data.map(({id, label, percentage}) => (
        <li className={css.item} key={id} style={{ backgroundColor: generateRandomColor() }}>     
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>     
      ))}
    </ul>
  )
}
