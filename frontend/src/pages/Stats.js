import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Stats = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch("http://localhost:9292/stats")
      .then((response) => response.json())
      .then((statData) => setStats(statData))
  }, [])

  if (!stats) return <div>Loading....</div>

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Statistics</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h2>Customer Stats</h2>
            <p>
              <strong>Total Customers:</strong>{" "}
              {stats.customers.total_customers}
            </p>
            <p>
              <strong>Outstanding Balance:</strong> $
              {stats.customers.total_amount_owed}
            </p>
            <p>
              <strong>Average Customer Cost:</strong> $
              {stats.customers.average_customer_cost}
            </p>
            <h3>Favorite Customers</h3>
            <ul>
              {stats.customers.favorite_customers.map((customer, index) => (
                <li key={index}>{customer}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h2>Rental Stats</h2>
            <p>
              <strong>Total Rentals:</strong> {stats.rentals.total_rentals}
            </p>
            <p>
              <strong>Open Rentals:</strong> {stats.rentals.open_rentals}
            </p>
            <p>
              <strong>Average Rental Duration:</strong>{" "}
              {stats.rentals.average_rental_length}
            </p>
            <h3>Most Popular Tool:</h3>
            <p>{stats.rentals.most_popular_tool}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
