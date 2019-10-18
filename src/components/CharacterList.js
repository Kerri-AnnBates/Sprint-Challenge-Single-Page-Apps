import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function CharacterList() {

  const [charactersData, setCharactersData] = useState([]);
  const [filteredChracters, setFilteredCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // Get value from search input.
  function searchCharacters(e) {
    setSearchValue(e.target.value);
  }

  // Pull in data from API on load.
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {

      setCharactersData(response.data.results);
      setFilteredCharacters(response.data.results);
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
  }, []);

  // Filter through data on every change from the form.
  useEffect(() => {
    setFilteredCharacters(
      charactersData.filter((character) => {
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );

  }, [searchValue]);


  return (
    <section className="character-list">
      <SearchForm searchCharacters={searchCharacters} />
      <Flex>
        {filteredChracters.map(character => (
          <CharacterCard character={character} key={character.id}/>
        ))}
      </Flex>
    </section>
  );
}
