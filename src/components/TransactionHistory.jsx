

import PropTypes from "prop-types";
import { Table, TrHead, TrRow  } from './Transaction.styled';


const TransactionHistory = ({ items }) => {
  return(
  <Table className="transaction-history">
    <TrHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TrHead>

    <tbody>
      {items.map((items) => (
        <TrRow key={items.id}>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </TrRow>
      ))}
    </tbody>
  </Table>
  )
};

TransactionHistory.prototype={
  items: PropTypes.string,
  children: PropTypes.node
}


export default TransactionHistory;
