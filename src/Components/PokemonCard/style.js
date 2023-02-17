import styled from "styled-components";


export const Container = styled.div
  `padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 30px 10px;
  color: white;`
;

export const PokemonNumber = styled.p
`  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  text-shadow: 2px 2px black;`
;

export const PokemonName = styled.h1
 `font-size: 32px;
  width: 250px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  text-shadow: 2px 2px black;`
  
;

export const PokemonType = styled.img
`max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;`
;

export const TypesContainer = styled.div
 ` margin-bottom: 52px;`
;
export const Pokeball = styled.img
`  position: absolute;
  top: 0;
  right: 0;`
;

export const CatchButton = styled.button
  `display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: ${(props) => props.colorText};`
;

export const Pokemon = styled.img
`width: 223px;
height: 223px;
position: absolute;
top: -60px;
right: 0;
z-index: 2`;

export const ButtonDetails = styled.button
  `border: none;
  background: none;
  text-decoration: underline;
  font-weight: 700;
  font-size: 16px;
  line-height: normal;
  color: white;
  &:hover {
    cursor: pointer;}`





// export const Container = styled.div
//  `padding: 16px;
//   min-width: 400px;
//   max-width: 440px;
//   background-color: aqua;
//   border-radius: 12px;
//   display: flex;
//   position: relative;
//   margin: 50px;
//   color: #ffffff;
// `;

// export const PokemonNumber = styled.p
//   `font-family: "Inter", sans-serif;
//   font-size: 16px;
//   font-weight: 600;
//   text-align: left;`
// ;

// export const PokemonName = styled.h1
//   `font-size: 32px;
//   font-weight: 700;
//   letter-spacing: 0em;
//   text-align: left;
//   margin-bottom: 10px;`
// ;

// export const PokemonType = styled.img
//   `max-width: 100px;
//   height: 32px;
//   border-radius: 8px;
//   overflow: hidden;
//   border: 1px dashed #ffffff;
//   margin-right: 8px;`
// ;

// export const TypesContainer = styled.div
//   `margin-bottom: 52px;`
// ;
// export const Pokeball = styled.img
//   `position: absolute;
//   top: 0;
//   right: 0;`
// ;

// export const DetalsButton = styled.button
//   `display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 4px 10px;
//   width: 146px;
//   height: 38px;
//   background: #ffffff;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   /* bottom: 10px; */
//   top: 138px;
//   right: 22px;
//   z-index: 2;
//   color: #000;`
// ;

// export const CatchButton = styled.button
//   `display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 4px 10px;
//   width: 146px;
//   height: 38px;
//   background: #ffffff;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   bottom: 10px;
//   right: 22px;
//   z-index: 2;
//   color: #000;`
// ;

// export const Pokemon = styled.img
//  `width: 193px;
//   height: 193px;
//   position: absolute;
//   top: -60px;
//   right: 0;
//   z-index: 2;`
// ;