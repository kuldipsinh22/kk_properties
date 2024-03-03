import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  return (
    <>
      <BrowserRouter>
        {/* {auth ? ( */}
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
          <Footer />
        </>
        {/* ) : ( */}
        {/* <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )} */}
      </BrowserRouter>
    </>
  );
}
export default App;
