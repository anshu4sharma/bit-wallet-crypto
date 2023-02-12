import React from "react";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
