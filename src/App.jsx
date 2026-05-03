import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

import Cart from "./views/Cart";



function App() {
  const [view, setView] = useState("home");

  return (
    <>
      <Navbar setView={setView} />

      {view === "home" && <Home />}
      {view === "login" && <LoginPage />}
      {view === "register" && <RegisterPage />}
      {view === "cart" && <Cart />}

      <Footer />
    </>
  );
}

export default App;