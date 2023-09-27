import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PokiesWrap } from '../pokies/PokiesStyle';
import SearchBar from '../searchBar/SearchBar';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const Pokies = () => {
  const [pagedata, setPagedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const countOfZero = (z) => {
    if (z > 9 && z <= 99) {
      return '0';
    } else if (z > 99) {
      return '';
    }
    return '00';
  };

  const previousPage = () => {
    if (currentPage > 9) {
      setCurrentPage(currentPage - 20);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 20);
  };

  useEffect(() => {
    const getPokies = () => {
      axios
        .get(`${API_URL}?limit=20&offset=${currentPage}`)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            const { results } = response.data;
            const newPokies = results.map((pokie, index) => ({
              id: index + 1,
              url: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${countOfZero(
                currentPage + index + 1
              )}${currentPage + index + 1}.png`,
              name: pokie.name,
            }));
            setPagedata(newPokies);
          }
        })
        .catch((error) => {
          console.log(error);
          // Handle error here, e.g., show an error message to the user
        });
    };

    getPokies();
  }, [currentPage]);

  const searchHandler = (e) => {
    const results = pagedata.filter((pokie) => {
      if (e === ' ') return pagedata;
      return pokie.name.toLowerCase().includes(e.toLowerCase());
    });
    setPagedata(results);
  };

  return (
    <React.Fragment>
      <PokiesWrap>
        <div className="pokies-outter">
          <SearchBar onSearch={searchHandler} />
          <div className="pokie-card">
            {pagedata && pagedata.length > 0 ? (
              pagedata.map((pokie) => (
                <div className="tan-card" key={pokie.id}>
                  <Link to={`/pokieDetails/${pokie.name}`} className="pokie-details-link">
                    <div className="tan-image">
                      <img src={pokie.url} alt={pokie.name} loading="lazy" />
                    </div>
                    <div className="tan-name">{pokie.name}</div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No Pokémon data available.</p>
            )}
          </div>
          <div className="paginate">
            {currentPage > 0 && (
              <div className="page-btn-prev">
                <button onClick={previousPage}>&#8617; {'Prev'}</button>
              </div>
            )}
            {currentPage < 1000 && (
              <div className="page-btn-next">
                <button onClick={nextPage}>{'Next'} &#8618;</button>
              </div>
            )}
          </div>
        </div>
      </PokiesWrap>
    </React.Fragment>
  );
};

export default Pokies;


