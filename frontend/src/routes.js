import App from "./App"
import ToolsList from "./pages/ToolsList"
import Customers from "./pages/Customers"
import Rental from "./pages/Rental"
import Stats from "./pages/Stats"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ToolsList />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "rentals",
        element: <Rental />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]

export default routes
