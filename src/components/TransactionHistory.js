

import PropTypes from "prop-types";


const TransactionHistory = ({ items }) => {
  return(
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map((items) => (
        <tr key={items.id}>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
};

TransactionHistory.prototype={
  items: PropTypes.string,
  children: PropTypes.node
}


export default TransactionHistory;
