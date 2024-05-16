import { TransactionHistory } from "./TransactionHistory"
import css from "./Transactionion.module.css"

export const Transaction = () => {
  return (
    <table className={css.transaction_history}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <TransactionHistory />
  </tbody>
</table>
)}