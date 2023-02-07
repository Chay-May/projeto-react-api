import React from 'react'
import Header from '../../Header/Header'
import PokemonCard from '../../PokemonCard/PokemonCard'
import {useNavigate} from 'react-router-dom'
import { CardContainer, Texto } from './PokedexStyle'

const PokedexPages = () => {

// const navigate = useNavigate ()

// const [dados, setDados] = [
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"},
// {nome: "chayrizard", poder: "fogo"}
// ]

  return (
    
    <div>
        
        {/* <Header/> */}

      <Texto>PokedexPages</Texto>  

        {/* <CardContainer>
            {dados.map(()=>{
                    return <PokemonCard/>;
                })
            }
        </CardContainer> */}
    </div>
  )
}

export default PokedexPages;