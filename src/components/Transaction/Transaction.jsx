import PropTypes from 'prop-types';
import css from './Transactionion.module.css';

export const Transaction = ({ transactions }) => {
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
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.item}>{type}</td>
            <td className={css.item}>{amount}</td>
            <td className={css.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
