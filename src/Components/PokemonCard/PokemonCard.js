import React from 'react'
import { Container, DetalsButton, Pokeball, Pokemon, PokemonName, PokemonNumber, TypesContainer, CatchButton } from './style'

const PokemonCard = () => {
  return (
    <div>
        <p>PokemonCard</p>
    <Container>
      <div>
        <PokemonNumber>id</PokemonNumber>
        <PokemonName>Nome</PokemonName>
        <TypesContainer>
          tipos
        </TypesContainer>
        <p>Detalhes</p>
      </div>
      <div>
        <Pokemon/>
        <CatchButton>adicionar</CatchButton>
        <DetalsButton>Detalhes</DetalsButton>
      </div>
      <Pokeball />
    </Container>
    </div>
  )
}

export default PokemonCard