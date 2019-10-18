import React from "react";

export default function CharacterCard(props) {
  const { character } = props;

  return (
    <div className="card">
      <h2>{character.name}</h2>
      <div className="image">
        <img src={character.image} />
      </div>
      <div className="details">
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </div>
    </div>
  )
}
