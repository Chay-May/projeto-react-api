import React from "react";
import { Space, StyledHeader, StyledImg } from "./HeaderStyle";
import logo from "../../assets/WhatsApp Image 2023-02-08 at 19.22.01.jpeg";
import { goToHome, goToList } from "../../Router/Coordinator";
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams()

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <StyledHeader>
            <Space></Space>
              <StyledImg alt="logo pokemon" src={logo} />
              <button onClick={goToList(navigate)}>Pokédex</button>
            </StyledHeader>
          </>
        );

      case "/pokedex":
        return (
          <>
            <StyledHeader>
            <Space></Space>
              <StyledImg alt="logo pokemon" src={logo} />
              <button onClick={goToHome(navigate)}>Todos Pókemons</button>
            </StyledHeader>
          </>
        );

      case `/details/${params.pokemon}`:
        return (
          <>
            <StyledHeader>
              <button onClick={goToList(navigate)}>Pokédex</button>
              <StyledImg alt="logo pokemon" src={logo} />
              <button onClick={goToHome(navigate)}>Todos Pókemons</button>
            </StyledHeader>
          </>
        );
    }
  };

  return <>{renderHeader()}</>;
};

export default Header;
