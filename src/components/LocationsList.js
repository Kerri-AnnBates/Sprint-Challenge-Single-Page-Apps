import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from 'styled-components';
import LocationCard from './LocationCard';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default function CharacterList() {

  const [locationsData, setLocationsData] = useState([]);

  // Pull in data from API on load.
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
    .then(response => {

      setLocationsData(response.data.results);
    })
    .catch(error => {
      console.log('Error: Unable to fetch data', error);
    })
  }, []);


  return (
    <section>
        <h2>Locations</h2>
      <Flex>
        {locationsData.map(location => (
          <LocationCard location={location} key={location.id}/>
        ))}
      </Flex>
    </section>
  );
}
