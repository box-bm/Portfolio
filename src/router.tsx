import App from "./App";
import Main from "./pages/main";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: (loader) => <h1>Cargando...</h1>,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export default router;
