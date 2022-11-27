import {
  VStack,
  Flex,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import ChatList from "./components/ChatList"
import ChatScreen from "./components/ChatScreen"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./screens/Login";
import Customer from "./screens/Customer";
import Error from "./screens/Error";

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login />
      )
    },
    {
      path: "/customers",
      element: (
        <Customer />
      )
    },
    {
      path: "*",
      element: (
        <Error />
      )
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
