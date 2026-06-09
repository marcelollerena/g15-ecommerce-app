import { createBrowserRouter } from "react-router";

import { Landing } from "../app/landing/landing";
import { Products } from "../app/products/products";
import { ShopLayout } from "../common/layouts/shop-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ShopLayout,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
]);
