import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

export function ShopLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
