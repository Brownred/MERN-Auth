import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home";
import SignUp from "../auth/sign-up/SignUp";
import ErrorPage from "../home/error-page";
import LoginForm from "../auth/login/LoginForm";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LoginForm />
  }
])


export default router;
