import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Callback } from "./Callback";
import { Admin } from "./Admin";
import { AuthProvider } from "./AuthProvider";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>       
    ),
  },
  {
    path: "callback",
    element: <Callback />,
  },
]);

function App() {
  
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
