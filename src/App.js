import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import './Assets/Css/Common.css';
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </Provider>
    </Router>
  );
};

export default App;
