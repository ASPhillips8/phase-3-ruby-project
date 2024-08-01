import React, { useEffect, useState } from "react"

const Stats = () => {
  // const [stats, setStats] = useState(null)

  // useEffect(() => {
  //   fetch("http://localhost:9292/stats")
  //     .then((response) => response.json())
  //     .then((data) => setStats(data))
  // }, [])

  // if (!stats) return <div>Loading...</div>

  return (
    <div>
      <h1>Statistics</h1>
      <div>
        <h2>Customer Stats</h2>
        <p>Total Customers: {stats.customers.total_customers}</p>
        <p>Total Amount Owed: ${stats.customers.total_amount_owed}</p>
        <p>Average Customer Cost: ${stats.customers.average_customer_cost}</p>
        <h3>Favorite Customers</h3>
        <ul>
          {stats.customers.favorite_customers.map((customer, index) => (
            <li key={index}>{customer}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Rental Stats</h2>
        {/* <p>Total Rentals: {stats.rentals.total_rentals}</p>
        <p>Open Rentals: {stats.rentals.open_rentals}</p>
        <p>Average Rental Length: {stats.rentals.average_rental_length} days</p>
        <p>Most Popular Tool: {stats.rentals.most_popular_tool}</p> */}
      </div>
    </div>
  )
}

export default Stats
