import data from "../data.json"
import css from "./Statistics.module.css"
import {generateRandomColor} from "./RandomColor.js"

export const Statistics = () => {
  return (
    <ul className={css.stat_list}>
      {data.map((stat) => (
        <li className={css.item} key={stat.id} style={{ backgroundColor: generateRandomColor() }}>     
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>     
      ))}
    </ul>
  )
}
