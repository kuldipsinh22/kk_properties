import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Property from "./components/Property";
import About from "./components/About";
import Blogs from "./components/Blogs";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  // const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  return (
    <>
      <BrowserRouter>
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Properties" element={<Property />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}
export default App;
