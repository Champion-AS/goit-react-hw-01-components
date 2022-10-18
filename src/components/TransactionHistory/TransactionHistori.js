import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import css from '../TransactionHistory/TransactionHistori.modal.css';

function TransactionHistory({ transactions }) {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={[css.headCell, css.firstCell].join(' ')}>Type</th>
            <th className={css.headCell}>Amount</th>
            <th className={css.headCell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <Transaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;
