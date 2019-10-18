import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharactersData(response.data.results);
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {charactersData.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </section>
  );
}
