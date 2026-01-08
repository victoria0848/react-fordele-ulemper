import React from "react";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Greeting } from "./components/Greeting";
import { PropsHeader } from "./components/PropsHeader";
import { List } from "./components/List";
import "./styles/App.scss";

export const App = () => {
  const favoriteFoods = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Tacos",
  ];

  const favoriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "Forrest Gump",
  ];

  return (
    <>
      <Header>
        <PropsHeader headerText="Props er cool" />
        <PropsHeader />
        <Greeting name="Sara" />
        <Greeting name="Mark" />
        <Greeting name="Lila" />
      </Header>

      <Nav />

      <Main>
        <List title="Mine livretter" items={favoriteFoods} />
        <List title="Mine favoritfilm" items={favoriteMovies} />
      </Main>

      <Footer />
    </>
  );
};