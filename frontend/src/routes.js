import App from "./App"
import ToolsList from "./pages/ToolsList"
import Customers from "./pages/Customers"
import Rental from "./pages/Rental"
import Home from "./pages/Home"
import Stats from "./pages/Stats"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tools",
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
