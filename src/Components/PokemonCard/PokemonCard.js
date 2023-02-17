import React from "react";
import {
  Container,
  DetalsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  TypesContainer,
  CatchButton,
  PokemonType,
  ButtonDetails,
} from "./style";
import pokeball from "../../assets/pokebola-background.png.jpeg";
import { getTypes } from "../../Utils/Pokemon-Type";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";
import { goToDetails } from "../../Router/Coordinator";

const PokemonCard = ({
  id,
  name,
  type1,
  type2,
  currentPoke,
  img,
  cardColors,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);
  const { addPokedex, removePokedex, inPokedex } = context;

  const changeButton = () => {
    if (inPokedex(id)) {
      return (
        <CatchButton
          onClick={() => {
            addPokedex(currentPoke);
          }}
        >
          Capturar!
        </CatchButton>
      );
    } else {
      return (
        <CatchButton
          color="#FF6262"
          colorText={"White"}
          onClick={() => {
            removePokedex(currentPoke);
          }}
        >
          Remover da Pokedex!
        </CatchButton>
      );
    }
  };

  return (
    <Container color={cardColors}>
      <div>
        <PokemonNumber>{id <= 9 ? `00${id}` : `0${id}`}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          {type2 ? (
            <div>
              <PokemonType src={getTypes(type1)} />
              <PokemonType src={getTypes(type2)} />
            </div>
          ) : (
            <PokemonType src={getTypes(type1)} />
          )}
        </TypesContainer>
        <ButtonDetails onClick={() => goToDetails(navigate, name)}>
          Detalhes
        </ButtonDetails>
      </div>
      <div>
        <Pokemon src={img} alt="" />
        {changeButton()}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>

    // <div>
    //     <p>PokemonCard</p>
    // <Container>
    //   <div>
    //     <PokemonNumber>id</PokemonNumber>
    //     <PokemonName>Nome</PokemonName>
    //     <TypesContainer>
    //       tipos
    //     </TypesContainer>
    //     <p>Detalhes</p>
    //   </div>
    //   <div>
    //     <Pokemon/>
    //     <CatchButton>adicionar</CatchButton>
    //     <DetalsButton>Detalhes</DetalsButton>
    //   </div>
    //   <Pokeball />
    // </Container>
    // </div>
  );
};

export default PokemonCard;
