import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import SetHead from "./Head";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SetHead/>
      <div className="layout">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
