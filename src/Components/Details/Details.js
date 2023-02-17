import axios from "axios";
import { useEffect, useState } from "react";
import { getColors } from "../../Utils/Card-Colors";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContentCard } from "./styled";


const Details = ({url}) => {

const [currentPoke, setCurrentPoke] = useState([])

const getDetails = async () => {
try {
    const response = await axios.get(url)
    const pokemon = (response.data)
if (pokemon.types.length <= 1) {
    setCurrentPoke({
        id: pokemon.id,
        name: pokemon.name,
        type1: pokemon.types[0].type.name,
        img: pokemon.sprites.other['official-artwork']['front_default']
    })
}else{
    setCurrentPoke({
        id: pokemon.id,
        name: pokemon.name,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1].type.name,
        img: pokemon.sprites.other['official-artwork']['front_default']
    })
}

} catch (error) {
    alert(error)
}
    }

    useEffect(()=>{
        getDetails()
    },[])

    return (
        <ContentCard>
            <PokemonCard 
            id={currentPoke.id}
            name={currentPoke.name}
            type1={currentPoke.type1}
            type2={currentPoke.type2}
            img={currentPoke.img}
            currentPoke={currentPoke}
            cardColors={getColors(currentPoke.type1)}
            />

        </ContentCard>
    )
}

export default Details;