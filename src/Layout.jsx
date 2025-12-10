import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="page-container">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}
