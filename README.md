# Tool Rental Application

## Description

The Tool Rental Application is a web-based management system developed using React for the frontend and Sinatra for the backend. It enables tool rental businesses to efficiently manage their tool inventory, customer information, and rental transactions. Key features include adding, editing, and deleting tools, customers, and rentals, as well as generating business statistics.

## Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:ASPhillips8/phase-3-ruby-project.git
   ```
2. **Navigate to the backend directory:**
   ```bash
   cd phase-3-ruby-project/backend
   ```
3. **Install backend dependencies:**
   ```bash
   bundle install
   ```
4. **Set up the database:**
   ```bash
   bundle exec rake db:migrate
   bundle exec rake db:seed
   ```
5. **Start backend server:**

   ```bash
   bundle exec rake server
   ```

   The backend server will run on http://localhost:9292.

6. **Open a second terminal and navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```
7. **CInstall frontend dependencies:**
   ```bash
   npm install
   ```
8. **Clone the repository:**
   ```bash
   npm start
   ```
9. **Open your browser and navigate to http://localhost:3000 to view and use the application.**

The focus of this project is **building a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which will be used
by a separate **React frontend** that interacts with the database via the API.

![Rubyprojectdemo-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/8a67c33e-a066-4512-8c25-140888c479ef)


## Usage

1. Tool Management

- View the list of tools with options to sort by name, availability, or category.
- Add new tools to the inventory.
- Update the availability status of tools when rented or returned.

2. Customer Management

- View customer details along with their rental history.
- Add new customers and edit or delete existing customer details.

3. Rental Management

- View the list of all rentals with details of associated customers and tools.
- Create new rental records by selecting a customer, tool, and rental dates.
- Update or delete existing rentals.

4. Statistics

- View business statistics including:
  - Total customers
  - Outstanding balances
  - Average customer cost
  - Favorite customers
  - Total rentals
  - Open rentals
  - Average rental duration
  - The most popular tool

## Relationships
![Screenshot 2024-08-02 at 8 38 52 AM](https://github.com/user-attachments/assets/f491601f-9d19-4e7d-a840-a4e173c64456)

## Features

- **Tool Management**

  - Display a list of tools with sorting options.
  - Add new tools to the inventory.
  - Mark tools as rented or returned.

- **Customer Management**

  - Display a list of customers and their rental history.
  - Add, edit, or delete customer details.

- **Rental Management**

  - Display a list of rentals with customer and tool details.
  - Create, update, or delete rental records.

- **Statistics**
  - View key business metrics and statistics.

## Technologies Used

• Backend:
• Sinatra
• Active Record
• SQLite3

• Frontend:
• React
• Bootstrap

## Project Structure

### Backend

- **app/**: Application files.
  - **controllers/**: Controllers for handling requests.
  - **models/**: Models for database interactions.
- **db/**: Database migration and seed files.
- **config.ru**: Rack configuration file.

### Frontend

- **src/**: Source files.
  - **components/**: Reusable UI components.
  - **pages/**: Page components representing different views.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.
- **public/**: Public assets and static files.

## Future Enhancements

• Create route to individual tool to display more details and allow for delete and edit
•• Tool could be sold to customer

• Add filtering options for customer and rentals
• Add a tool accessory. Accessory would belong to a tool (association)
• Add logic to not allow deletion of Customers if rental is active
• Paid Balance Update that updates amount owed upon payment.
• Scheduled Reservations for tool rentals that updates availability based of estimate rental duration
• Multiple tool selection for single rental
• Improve the UI/UX with advanced styling and responsive design.

## Credits

- Bootstrap for frontend styling
- Ruby, Sinatra for backend development
- React for front end development
