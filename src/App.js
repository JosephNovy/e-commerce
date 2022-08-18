import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/Products" element={<Products></Products>}></Route>
          <Route
            path="/Products/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout></Checkout>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
