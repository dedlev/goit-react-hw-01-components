import { TransactionHistory } from "./TransactionHistory"

export const Transaction = () => {
  return (
    <table>
  <thead>
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