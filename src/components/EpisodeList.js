import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components';
import EpisodeCard from "./EpisodeCard";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function CharacterList() {

  const [episodesData, setEpisodeData] = useState([]);

  // Pull in data from API on load.
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
    .then(response => {

      setEpisodeData(response.data.results);
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
  }, []);


  return (
    <section>
        <h2>Episodes</h2>
      <Flex>
        {episodesData.map(episode => (
          <EpisodeCard episode={episode} key={episode.id}/>
        ))}
      </Flex>
    </section>
  );
}
