// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
// import Services from "./Components/Services";
// import Blog from "./Components/Blog";
// import Projects from "./Components/Projects";
// import Login from "./Components/Login";

// function App() {
//   const Layout = () => {
//     return (
//       <>
//         <Header></Header>
//         <Outlet></Outlet>
//         <Footer></Footer>
//       </>
//     );
//   };
//   const router1 = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout></Layout>,
//       children: [
//         {
//           path: "/",
//           element: <Home></Home>,
//         },
//         {
//           path: "/Home",
//           element: <Home></Home>,
//         },
//         {
//           path: "/About",
//           element: <About></About>,
//         },
//         {
//           path: "/Services",
//           element: <Services></Services>,
//         },
//         {
//           path: "/Blog",
//           element: <Blog></Blog>,
//         },
//         {
//           path: "/Projects",
//           element: <Projects></Projects>,
//         },
//         {
//           path: "/Login",
//           element: <Login></Login>,
//         },
//       ],
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router1}></RouterProvider>
//     </>
//   );
// }

// export default App;
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Edit_profile from "./Components/Edit_profile";
import Post from "./Components/Post";

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
              <Route path="/Profile" element={<Profile />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Edit_profile" element={<Edit_profile />} />
              <Route path="/Post" element={<Post />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/Home" element={<Home />} /> */}
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
