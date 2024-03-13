import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import Property from "./components/Property";
import Add_users from "./components/Add_users";
import Add_property from "./components/Add_property";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dealer from "./components/Dealer";
import Add_dealer from "./components/Add_dealer";
import PropertyforDealer from "./components/PropertyforDealer";
import Add_property_dealer from "./components/Add_property_dealer";

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
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  return (
    <>
      <BrowserRouter>
        {auth && role_id == 1 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Add_users" element={<Add_users />} />
              <Route path="/Add_users/:id" element={<Add_users />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Property" element={<Property />} />
              <Route path="/Add_property" element={<Add_property />} />
              <Route path="/Add_property/:id" element={<Add_property />} />
              <Route path="/Dealer" element={<Dealer />} />
              <Route path="/Add_dealer" element={<Add_dealer />} />
              <Route path="/Add_dealer/:id" element={<Add_dealer />} />
            </Routes>
            <Footer />
          </>
        ) : auth && role_id == 2 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route
                path="/PropertyforDealer"
                element={<PropertyforDealer />}
              />
              <Route path="/Add_propertyd" element={<Add_property_dealer />} />
              <Route
                path="/Add_propertyd/:id"
                element={<Add_property_dealer />}
              />
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
