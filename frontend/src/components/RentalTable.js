import React from "react"

const RentalTable = ({ rentals, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tool</th>
          <th>Customer</th>
          {/* <th>Amount Owed</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rentals.map((rental) => (
          <tr key={rental.id}>
            <td>
              {rental.tool.id} - {rental.tool.name}
            </td>
            <td>
              {rental.customer.id} - {rental.customer.full_name}
            </td>
            <td>
              <button onClick={() => onEdit(rental)}>Edit</button>
              <button onClick={() => onDelete(rental.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RentalTable
