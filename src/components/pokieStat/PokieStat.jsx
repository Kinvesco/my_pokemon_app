import React from 'react';
import { PokieStatStyle } from './PokieStatStyle'; 

const PokieStat = ({ stats }) => {
  console.log("Stats:", stats); // 

  
  if (!stats || stats.length === 0) {
    return (
      <PokieStatStyle>
        <div className='info-section'>
          <h3 className='section-title'>Pokie Statistics</h3>
          <h1>{"Not available"}</h1>
        </div>
      </PokieStatStyle>
    );
  }

  return (
    <PokieStatStyle>
      <div className='info-section'>
        <h3 className='section-title'>Pokie Statistics</h3>
        <ul>
          {stats.map((stat) => (
            <li key={stat.stat.name}>
              <div><b>{stat.stat.name}</b></div>
              <progress value={stat.base_stat} max="100"></progress>
            </li>
          ))}
        </ul>
      </div>
    </PokieStatStyle>
  );
}

export default PokieStat;
