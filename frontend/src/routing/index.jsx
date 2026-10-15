import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "project",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
