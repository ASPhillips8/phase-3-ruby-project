import React, { useState, useEffect } from "react"
import CustomerForm from "../components/CustomerForm"
import CustomerTable from "../components/CustomerTable"
import "bootstrap/dist/css/bootstrap.min.css"

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [isFormVisible, setFormVisible] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((response) => response.json())
      .then((customerData) => setCustomers(customerData))
      .catch(() => setErrorMessage("There was an error feting customer data"))
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/customers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((deleteData) => {
        if (deleteData.error) {
          setErrorMessage(deleteData.error)
        } else {
          setCustomers((prevCustomers) =>
            prevCustomers.filter((customer) => customer.id !== id)
          )
          setErrorMessage("")
        }
      })
      .catch(() =>
        setErrorMessage("Can Not Delete Customer if they have a rental")
      )
  }

  const handleSave = (customerData) => {
    const url = currentCustomer
      ? `http://localhost:9292/customers/${currentCustomer.id}`
      : "http://localhost:9292/customers"
    const method = currentCustomer ? "PATCH" : "POST"

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerData),
    })
      .then((response) => response.json())
      .then((savedCustomer) => {
        if (currentCustomer) {
          setCustomers((prevCustomers) =>
            prevCustomers.map((customer) =>
              customer.id === savedCustomer.id ? savedCustomer : customer
            )
          )
        } else {
          setCustomers([...customers, savedCustomer])
        }
        setFormVisible(false)
        setCurrentCustomer(null)
      })
      .catch(() => setErrorMessage("There was an issue saving the customer"))
  }

  const handleEdit = (customer) => {
    setCurrentCustomer(customer)
    setFormVisible(true)
  }

  const handleCancel = () => {
    setFormVisible(false)
    setCurrentCustomer(null)
  }

  return (
    <div className="container mt-4">
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center w-100">Customer List</h1>
        <button
          className="btn btn-primary"
          onClick={() => setFormVisible(true)}
        >
          Add Customer
        </button>
      </div>
      {isFormVisible && (
        <CustomerForm
          customer={currentCustomer}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      <CustomerTable
        customers={customers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Customers
