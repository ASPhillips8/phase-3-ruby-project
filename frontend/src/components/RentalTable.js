import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const RentalTable = ({ rentals, onUpdate, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="table-header">Tool</th>
          <th className="table-header">Customer</th>
          <th className="table-header">Date Out</th>
          <th className="table-header">Date Returned</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {rentals.map((rental) => (
          <tr key={rental.id}>
            <td>
              {rental.tool_id} - {rental.tool.name}
            </td>
            <td>
              {rental.customer_id} - {rental.customer.full_name}
            </td>
            <td>{rental.date_out}</td>
            <td>{rental.date_in}</td>
            <td>
              <button
                className="btn btn-warning mr-2"
                onClick={() => onUpdate(rental)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(rental.id)}
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

export default RentalTable
