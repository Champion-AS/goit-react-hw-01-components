import css from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
    return (
      <tr>
        <td className={[css.bodyCell, css.firstCell].join(' ')}>{type}</td>
        <td className={css.bodyCell}>{amount}</td>
        <td className={css.bodyCell}>{currency}</td>
      </tr>
    );
}
 export default Transaction;