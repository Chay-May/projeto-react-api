import React, { useState } from 'react'
import Header from '../../Header/Header'
import PokemonCard from '../../PokemonCard/PokemonCard'
import { CardContainer, Texto } from './PokedexStyle'

export default function PokedexPages () {

// const navigate = useNavigate ()

const [dados, setDados] = useState([
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"},
{nome: "chayrizard", poder: "fogo"}
])

  return (
    
    <div>
        
        <Header/>

      <Texto>PokedexPages</Texto> 
   

        <CardContainer>

        {dados.map(()=>{return <PokemonCard/>})} 
        </CardContainer>
    </div>
  )
}

