import items from "../transactions.json"
import css from "./Transactionion.module.css"

export const TransactionHistory = () => {
  return (
    items.map(({id, type, amount, currency}) => (
      <tr key={id}>
        <td className ={css.item}>{type}</td>
        <td className ={css.item}>{amount}</td>
        <td className ={css.item}>{currency}</td>
      </tr>
)))}