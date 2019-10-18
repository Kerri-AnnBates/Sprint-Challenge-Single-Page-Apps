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
  const [queryNameSearch, setQueryNameSearch] = useState('');
  const [searchedCharacter, setSearchedCharacter] = useState('');

  // Get value from search input.
  function searchCharacters(e) {
    setSearchValue(e.target.value);
  }

  // Stretch: name search.
  function onSearch(name) {
    setQueryNameSearch(name);
    console.log(name);
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

  // Api call for name Search
  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${searchedCharacter}`)
    .then(response => {
      setSearchedCharacter(response.data.results);
    })
    .catch(error => {
      console.log('Data could not be fetched.', error);
    })
  }, [queryNameSearch]);


  return (
    <section className="character-list">
      <SearchForm searchCharacters={searchCharacters} onSearch={onSearch} />
      <h2>Characters</h2>
      <Flex>
        {filteredChracters.map(character => (
          <CharacterCard character={character} key={character.id}/>
        ))}
      </Flex>
    </section>
  );
}
