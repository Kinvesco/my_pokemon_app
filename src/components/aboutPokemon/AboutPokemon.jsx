import React, { useEffect, useState } from 'react';
import { AboutPokemonStyle } from "../aboutPokemon/AboutPokemonStyle";

const AboutPokemon = ({ pokemon }) => {
  const [abilities, setAbilities] = useState('');

  useEffect(() => {
    if (pokemon && pokemon.abilities) {
      const abilitiesList = pokemon.abilities.map((ability) => ability.ability.name).join(', ');
      setAbilities(abilitiesList);
    } else {
      // Handle the case where pokemon or its abilities are undefined
      setAbilities('No abilities found');
    }
  }, [pokemon]);

  const { height, weight, base_experience, order } = pokemon || {};

  return (
    <AboutPokemonStyle>
      <div className='info-section'>
        <h3 className='section-title'>About Pokemon</h3>
        <ul>
          <li>
            <b>Abilities:</b> {abilities}
          </li>
          <li>
            <b>Height:</b> {height}cm
          </li>
          <li>
            <b>Weight:</b> {weight}kg
          </li>
          <li>
            <b>Base Experience:</b> {base_experience}
          </li>
          <li>
            <b>Order:</b> {order}
          </li>
        </ul>
      </div>
    </AboutPokemonStyle>
  );
};

export default AboutPokemon;
