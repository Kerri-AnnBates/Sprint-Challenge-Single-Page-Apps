import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width: 30%;
    background: grey;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export default function CharacterCard(props) {
  const { character } = props;

  return (
    <Card>
      <h2>{character.name}</h2>
      <div className="image">
        <img src={character.image} />
      </div>
      <div className="details">
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </div>
    </Card>
  )
}
