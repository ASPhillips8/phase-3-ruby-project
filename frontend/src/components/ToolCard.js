import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const ToolCard = ({ tool }) => {
  return (
    <div className="card h-100">
      <img
        src={tool.image}
        className="card-img-top"
        alt={tool.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{tool.name}</h5>
        <p className="card-text">{tool.description}</p>
        <p className="card-text">
          <strong>Price per day:</strong> ${tool.price_per_day}
        </p>
        <p className="card-text">
          <strong>Category:</strong> {tool.category}
        </p>
        <p className="card-text">
          <strong>Available:</strong> {tool.availability ? "Yes" : "No"}
        </p>
      </div>
    </div>
  )
}

export default ToolCard
