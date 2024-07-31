import React, { useState, useEffect } from "react"

const RentalForm = ({ onSave, onCancel }) => {
  const [tools, setTools] = useState([])
  const [customers, setCustomers] = useState([])
  const [selectedTool, setSelectedTool] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [dateOut, setDateOut] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/available_tools")
      .then((response) => response.json())
      .then((toolData) => setTools(toolData))

    fetch("http://localhost:9292/customers")
      .then((response) => response.json())
      .then((customerData) => setCustomers(customerData))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRental = {
      customer_id: selectedCustomer,
      tool_id: selectedTool,
      date_out: dateOut,
    }
    onSave(newRental)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tool:</label>
        <select
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a tool
          </option>
          {tools.map((tool) => (
            <option key={tool.id} value={tool.id}>
              {tool.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Customer:</label>
        <select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.first_name} {customer.last_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Date Out:</label>
        <input
          type="date"
          value={dateOut}
          onChange={(e) => setDateOut(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save Rental</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default RentalForm
