import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width: 30%;
    background: #82B83A;
    color: #000060;
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SubTitle = styled.h2`
  color: #fff;
`

export default function CharacterCard(props) {
  const { character } = props;

  return (
    <Card>
      <SubTitle>{character.name}</SubTitle>
      <div className="image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="details">
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </div>
    </Card>
  )
}
