import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import "./styles/App.scss";

export const App = () => {
  return (
    <>
      <Header >
        <Greeting name="Sara" />
        <Greeting name="Mark" />
        <Greeting name="Lila" />
      </Header >
      <Nav />
      <Main />
      <Footer />
    </>
  );
};