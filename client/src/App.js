import "./styles/main.scss";
import Heading from "./components/Heading";
import About from "./components/About";
import Hero from "./components/Hero";
import Price from "./components/Price";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useRef, useState } from "react";

const App = () => {
  return (
    <div>
      <div className="bg" id="home">
        <Heading />
        <Hero />
      </div>
      <About />
      <Price />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
