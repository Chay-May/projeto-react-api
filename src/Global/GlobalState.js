import axios from "axios";
import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/url";
import { GlobalContext } from "./GlobalContext";


const GlobalState = (props) => {

const [pokemonsName, setPokemonsName] = useState([])
// const [pokemons, setPokemons] = useState([])
const [pokedex, setPokedex] = useState([])


const getPokemons = async () => {
try {
    const response = await axios.get(`${BASE_URL}/pokemon`)
    setPokemonsName(response.data.results)
} catch (error) {
    alert(error)
}
}

useEffect((
)=>{getPokemons()},[])


const addPokedex = (pokemon)=>{
    const filterPokemon = pokedex.find((pokemonInPokedex)=>pokemonInPokedex.name === pokemon.name) //vai percorrer a pokedex e procurar se o nome corresponde com o pokemons já salvo na pokedex
    if (!filterPokemon) {
        const newPokedex = [...pokedex, pokemon]
        setPokedex(newPokedex)
    }
}

const removePokemon = (pokemonRemoved)=>{
    const newPokedex = pokedex.filter((pokemonInPokedex)=>pokemonInPokedex.name !== pokemonRemoved.name)
    setPokedex(newPokedex)
}




const inPokedex = (id) => {
    return pokedex.findIndex((p) => p.id === id) === -1;
  }

// useEffect(()=>{
// const newList = []
// pokemonsName.forEach((item) => {
//     axios.get(item.url)
//     .then((response)=>{newList.push(response.data)
//     if (newList.length === 20) {
//         setPokemons(newList)
//     } 
//     })
//     .catch((error) => alert(error.message))
// })
// },[pokemonsName])

    const data = {
        pokedex, setPokedex, pokemonsName, setPokemonsName, removePokemon, addPokedex, inPokedex
    }

    return (
        <GlobalContext.Provider value={data}>
{props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;