import React, { useState, useEffect } from "react"
import ToolCard from "../components/ToolCard"
import ToolForm from "../components/ToolForm"
import "bootstrap/dist/css/bootstrap.min.css"

const ToolsList = () => {
  const [tools, setTools] = useState([])
  const [sort, setSort] = useState("name")
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchTools()
  }, [sort])

  const fetchTools = () => {
    fetch(`http://localhost:9292/tools?sort_by=${sort}`)
      .then((response) => response.json())
      .then((toolData) => setTools(toolData))
      .catch((error) => console.error("Failed to fetch tools:", error))
  }

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  const handleAddTool = (newTool) => {
    setTools([...tools, newTool])
    setShowForm(false)
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center w-100">Tools</h1>
        <div className="d-flex align-items-center">
          <label className="mr-2">Sort by:</label>
          <select
            className="form-control"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="name">Name</option>
            <option value="available">Available</option>
            <option value="category">Tool Category</option>
          </select>
        </div>
      </div>

      <div className="text-center mb-4">
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Tool"}
        </button>
      </div>

      {showForm && <ToolForm onAddTool={handleAddTool} />}

      <div className="row justify-content-center">
        {tools.map((tool) => (
          <div className="col-md-4 mb-4" key={tool.id}>
            <ToolCard tool={tool} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolsList
