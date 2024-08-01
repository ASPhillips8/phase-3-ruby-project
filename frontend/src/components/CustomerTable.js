import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="table-header">First Name</th>
          <th className="table-header">Last Name</th>
          <th className="table-header">Age</th>
          <th className="table-header">Phone Number</th>
          <th className="table-header">Email Address</th>
          <th className="table-header">Actions</th>
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
              <button
                className="btn btn-warning mr-2"
                onClick={() => onEdit(customer)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(customer.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerTable
