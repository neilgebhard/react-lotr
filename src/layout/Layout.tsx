import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
