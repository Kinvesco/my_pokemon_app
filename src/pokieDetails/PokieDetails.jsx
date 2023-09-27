import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutPokemon from '../components/aboutPokemon/AboutPokemon';
import PokieStat from '../components/pokieStat/PokieStat';
import { PokieDetailsStyle } from "../pokieDetails/PokieDetailsStyle";

function zeroCount(i) {
  if (i < 10) {
    return "00";
  } else if (i < 100) {
    return "0";
  } else {
    return "";
  }
}

const PokieDetails = () => {
  const [pokemon, setPokemon] = useState(null); // Initialize with null
  const [error, setError] = useState("");
  const { name } = useParams();

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("No Pokémon found");
        } else {
          setError("An error occurred while fetching data.");
        }
      }
    }
    getPokemon();
  }, [name]);

  return (
    <PokieDetailsStyle>
      <div>
        <div className="pokie-description">
          {pokemon ? (
            <React.Fragment>
              <div>
                <p className="pokie-name">{pokemon.name}</p>
                <hr />
              </div>
              <div className="detailsCard">
                <div className="pokie-details-image-holder">
                  <img
                    src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${zeroCount(pokemon.id)}${pokemon.id}.png`}
                    alt={pokemon.name}
                    className="pokie-details-image"
                  />
                </div>
                <div>
                  {error ? (
                    <div>{error}</div>
                  ) : (
                    <React.Fragment>
                      <AboutPokemon pokemon={pokemon} />
                      <PokieStat stats={pokemon.stats} />
                    </React.Fragment>
                  )}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </PokieDetailsStyle>
  );
};

export default PokieDetails;
