
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { GlobalContext } from '../../Global/GlobalContext';
import { getColors } from '../../Utils/Card-Colors';
import { Container } from '../PokemonsDetails/PokemonsDetailsStyle';
import { ContainerCard, Title } from './PokedexStyle';

const PokedexPages = () => {
  
const context = useContext(GlobalContext);
const {pokedex} = context;
const navigate = useNavigate();


  return (
    <>
    <Header />
    <Container>
      <Title>
      <h1>Meus Pokémons</h1>
      </Title>
      <ContainerCard>
      {pokedex
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((currentPoke) => {
        return (
          <PokemonCard 
          key={currentPoke.name}
          id={currentPoke.id}
          name={currentPoke.name}
          type1={currentPoke.type1}
          type2={currentPoke.type2}
          img={currentPoke.img}
          currentPoke={currentPoke}
          cardColors={getColors(currentPoke.type1)}
          />
        )
      })}
      </ContainerCard>
    </Container>
  </>
  )

  // const navigate = useNavigate();
  // const context = useContext(GlobalContext);

  // const { pokemonsName } = context;

  // return (
  //   <div>
  //     <Header />
  //     {pokemonsName.map((poke, index) => {
  //       return <Details key={index} url={poke.url} />;
  //     })}
  //   </div>
  // );
};

export default PokedexPages;
