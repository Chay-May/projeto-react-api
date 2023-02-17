import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import { CardContainer, Container, Texto } from "./PokemonsListStyle";
import { GlobalContext } from "../../Global/GlobalContext";
import Details from "../../Components/Details/Details";

const PokemonsListPages = () => {

  const [pokemonsList, setPokemonsList] = useState([])

  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokemonsName } = context;


  const listPokemon = pokemonsName.map((poke, index) => {
    return <Details key={index} url={poke.url} />;
  });

  return (
    <Container>
      {console.log(pokemonsName)}
      <Header />
      <h1>Todos Pokémons</h1>
      <section>{listPokemon}</section>
    </Container>
  );
};

export default PokemonsListPages;
