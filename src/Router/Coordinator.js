export const goToHome = (navigate) => {
    navigate("/");
  };

  export const goToList = (navigate) => {
    navigate("/pokedex");
  };

  export const goToDetails = (navigate, name) => {
    navigate(`/details/${name}`);
  };

