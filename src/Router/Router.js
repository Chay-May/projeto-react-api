import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPages from "../Components/Pages/PokedexPages/PokedexPages";
import PokemonsListPages from "../Components/Pages/PokemonsList/PokemonsListPages";
import  PokemonsDetailsPage from "../Components/Pages/PokemonsDetails/PokemonsDetailsPage"

export default function Router (){
   
    return(
        <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<PokedexPages/>} />
        <Route path="/list" element={<PokemonsListPages/>} />
        <Route  path="/details" element={<PokemonsDetailsPage/>}/>

       


        </Routes>
        
        </BrowserRouter>

    )
}