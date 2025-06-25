import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
