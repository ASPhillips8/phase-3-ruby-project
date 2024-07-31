import React, { useState, useEffect } from "react"
import RentalTable from "../components/RentalTable"
import RentalForm from "../components/RentalForm"

const Rental = () => {
  const [rentals, setRentals] = useState([])
  const [customers, setCustomers] = useState([])
  const [tools, setTools] = useState([])
  const [isFormVisible, setFormVisible] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/rentals")
      .then((response) => response.json())
      .then((data) => {
        setRentals(data.rentals)
        setCustomers(data.customers)
        setTools(data.tools)
      })
  }, [])

  const handleSave = (newRental) => {
    fetch("http://localhost:9292/rentals/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRental),
    })
      .then((response) => response.json())
      .then((savedRental) => {
        console.log(savedRental)
        setRentals((prevRentals) => [...prevRentals, savedRental])
        setFormVisible(false)
      })
  }

  console.log(rentals)

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/rentals/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setRentals((prevRentals) =>
          prevRentals.filter((rental) => rental.id !== id)
        )
      })
      .catch((error) =>
        console.error("There was an error deleting the rental!", error)
      )
  }

  const handleCancel = () => {
    setFormVisible(false)
  }

  return (
    <div>
      <h1>Current Rentals</h1>
      <button onClick={() => setFormVisible(true)}>Add Rental</button>
      {isFormVisible && (
        <RentalForm
          onSave={handleSave}
          onCancel={handleCancel}
          tools={tools}
          customers={customers}
        />
      )}
      <RentalTable rentals={rentals} onDelete={handleDelete} />
    </div>
  )
}

export default Rental
