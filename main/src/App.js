import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Property from "./components/Property";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Singlept from "./components/Singlept";
import Login from "./components/Login";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Properties" element={<Property />} />
              <Route path="/About" element={<About />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Singlept/:id" element={<Singlept />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
