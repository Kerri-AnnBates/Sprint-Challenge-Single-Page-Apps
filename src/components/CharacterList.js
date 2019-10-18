import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {

  const [charactersData, setCharactersData] = useState([]);
  const [filteredChracters, setFilteredCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // Get value from search input.
  function searchCharacters(e) {
    setSearchValue(e.target.value);
  }

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

  useEffect(() => {
    setFilteredCharacters(
      charactersData.filter((character) => {
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    )

  }, [searchValue]);

  console.log(searchValue);
  console.log(filteredChracters);
  return (
    <section className="character-list">
      <SearchForm searchCharacters={searchCharacters} />
      {filteredChracters.map(character => (
        <CharacterCard character={character} key={character.id}/>
      ))}
    </section>
  );
}
