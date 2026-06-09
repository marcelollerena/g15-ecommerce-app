import { router } from "./router/router";
import { RouterProvider } from "react-router";

import "./common/styles/global.css";

export function App() {
  return <RouterProvider router={router} />;
}
