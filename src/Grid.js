import React from 'react';

function Grid({items}) {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">City</th>
        <th scope="col">Amount</th>
      </tr>
      </thead>
      <tbody>
      {
        items.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.date}</td>
            <td>{item.city}</td>
            <td>{item.amount}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default Grid;
