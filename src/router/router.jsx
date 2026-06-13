import { createBrowserRouter } from "react-router";

import { Landing } from "../app/landing/landing";
import { Products } from "../app/products/products";
import { ShopLayout } from "../common/layouts/shop-layout";
import { Product } from "../app/products/product";
import { Checkout } from "../app/checkout/checkout";

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
      {
        path: "product/:id",
        Component: Product,
      },
      {
        path: "checkout",
        Component: Checkout,
      },
    ],
  },
]);
