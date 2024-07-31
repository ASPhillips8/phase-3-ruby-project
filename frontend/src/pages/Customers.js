import React, { useState, useEffect } from "react"
import CustomerForm from "../components/CustomerForm"

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

  const handleSave = (customerData) => {
    fetch("http://localhost:9292/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...customerData, current_amount_owed: 0 }),
    })
      .then((response) => response.json())
      .then((newCustomer) => {
        setCustomers([...customers, newCustomer])
        setFormVisible(false)
        setCurrentCustomer(null)
      })
      .catch((error) =>
        console.error("There was an error saving the customer!", error)
      )
  }
  /// so above code creates new customer
  /// and when hit edit it auto pops the fields
  /// need to figure out the post of this ... conditional

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
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Amount Owed</th>
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
              <td>{customer.current_amount_owed}</td>
              <td>
                <button onClick={() => handleEdit(customer)}>Edit</button>
                <button onClick={() => handleDelete(customer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customers
