import React, { useState, useEffect } from "react"
import RentalTable from "../components/RentalTable"
import RentalForm from "../components/RentalForm"
import EditRentalForm from "../components/EditRentalForm"
import "bootstrap/dist/css/bootstrap.min.css"

const Rental = () => {
  const [rentals, setRentals] = useState([])
  const [customers, setCustomers] = useState([])
  const [tools, setTools] = useState([])
  const [isFormVisible, setFormVisible] = useState(false)
  const [isEditFormVisible, setEditFormVisible] = useState(false)
  const [currentRental, setCurrentRental] = useState(null)

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
        setRentals((prevRentals) => [...prevRentals, savedRental])
        setTools((prevTools) =>
          prevTools.filter((tool) => tool.id !== savedRental.tool.id)
        )
        setFormVisible(false)
      })
  }

  const handleUpdate = (updatedRental) => {
    fetch(`http://localhost:9292/rentals/${updatedRental.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date_out: updatedRental.date_out,
        date_in: updatedRental.date_in,
      }),
    })
      .then((response) => response.json())
      .then((updatedRental) => {
        setRentals((prevRentals) =>
          prevRentals.map((rental) =>
            rental.id === updatedRental.id ? updatedRental : rental
          )
        )
        setTools((prevTools) => [...prevTools, updatedRental.tool])
        setEditFormVisible(false)
        setCurrentRental(null)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

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
    setEditFormVisible(false)
    setCurrentRental(null)
  }

  const handleEditClick = (rental) => {
    setFormVisible(false)
    setCurrentRental(rental)
    setEditFormVisible(true)
  }

  const handleAddRentalClick = () => {
    setEditFormVisible(false)
    setFormVisible(true)
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center w-100">Current Rentals</h1>
        <button className="btn btn-primary" onClick={handleAddRentalClick}>
          Add Rental
        </button>
      </div>
      {isFormVisible && (
        <RentalForm
          onSave={handleSave}
          onCancel={handleCancel}
          tools={tools}
          customers={customers}
        />
      )}
      {isEditFormVisible && currentRental && (
        <EditRentalForm
          rental={currentRental}
          onUpdate={handleUpdate}
          onCancel={handleCancel}
        />
      )}
      <RentalTable
        rentals={rentals}
        onDelete={handleDelete}
        onUpdate={handleEditClick}
      />
    </div>
  )
}

export default Rental
