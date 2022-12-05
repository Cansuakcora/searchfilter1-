import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <th>{item.first_name}</th>
            <th>{item.last_name}</th>
            <th>{item.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
