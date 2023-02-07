import React from 'react'
import PokedexPages from '../Components/Pages/PokedexPages/PokedexPages'
import PokemonsDetailsPage from '../Components/Pages/PokemonsDetails/PokemonsDetailsPage'
import PokemonsListPages from '../Components/Pages/PokemonsList/PokemonsListPages'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const Router = () => {
  <BrowserRouter>

  <Routes>

  <Route  index element={<PokedexPages />} />
  <Route  path="/list" element={<PokemonsListPages />} />
  <Route  path="/details" element={<PokemonsDetailsPage />} />

  </Routes>
  
  </BrowserRouter>
}

export default Router