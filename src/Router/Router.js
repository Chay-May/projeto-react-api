import React from "react";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonsDetailsPage from "../Pages/PokemonsDetails/PokemonsDetailsPage";
import PokemonsListPage from "../Pages/PokemonsList/PokemonsListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonsListPage/>} />
          <Route path="/pokedex" element={<PokedexPage/>} />
          <Route path="/details/:pokemon" element={<PokemonsDetailsPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
