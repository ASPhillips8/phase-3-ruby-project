import React, { useState, useEffect } from "react"
import CustomerForm from "../components/CustomerForm"
import CustomerTable from "../components/CustomerTable"

const Customers = () => {
  const [customers, setCustomers] = useState([])
  const [isFormVisible, setFormVisible] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/customers")
      .then((response) => response.json())
      .then((customerData) => setCustomers(customerData))
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/customers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== id)
        )
      })
      .catch((error) =>
        console.error("There was an error deleting the customer!", error)
      )
  }

  // const handleSave = (customerData) => {
  //   fetch("http://localhost:9292/customers", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...customerData, current_amount_owed: 0 }),
  //   })
  //     .then((response) => response.json())
  //     .then((newCustomer) => {
  //       setCustomers([...customers, newCustomer])
  //       setFormVisible(false)
  //       setCurrentCustomer(null)
  //     })
  //     .catch((error) =>
  //       console.error("There was an error saving the customer!", error)
  //     )
  // }
  /// so above code creates new customer
  /// and when hit edit it auto pops the fields
  /// need to figure out the post of this ... conditional
  const handleSave = (customerData) => {
    const url = currentCustomer
      ? `http://localhost:9292/customers/${currentCustomer.id}`
      : "http://localhost:9292/customers"
    const method = currentCustomer ? "PATCH" : "POST"
    const dataToSend = currentCustomer
      ? customerData
      : { ...customerData, current_amount_owed: 0 }

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
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
      .catch((error) =>
        console.error("There was an error saving the customer!", error)
      )
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
    <div>
      <h1>Customer List</h1>
      <button onClick={() => setFormVisible(true)}>Add Customer</button>
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
