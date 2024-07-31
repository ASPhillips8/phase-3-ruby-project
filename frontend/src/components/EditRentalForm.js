import React, { useState } from "react"

const EditRentalForm = ({ rental, onUpdate, onCancel }) => {
  const [dateOut, setDateOut] = useState(rental.date_out || "")
  const [dateIn, setDateIn] = useState(rental.date_in || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedRental = {
      ...rental,
      date_out: dateOut,
      date_in: dateIn,
    }
    onUpdate(updatedRental)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date Out:</label>
        <input
          type="date"
          value={dateOut}
          onChange={(e) => setDateOut(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date In:</label>
        <input
          type="date"
          value={dateIn}
          onChange={(e) => setDateIn(e.target.value)}
        />
      </div>
      <button type="submit">Update Rental</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditRentalForm
