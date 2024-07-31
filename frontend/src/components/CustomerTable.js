import React from "react"

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone_number}</td>
            <td>{customer.email_address}</td>
            <td>
              <button onClick={() => onEdit(customer)}>Edit</button>
              <button onClick={() => onDelete(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerTable
