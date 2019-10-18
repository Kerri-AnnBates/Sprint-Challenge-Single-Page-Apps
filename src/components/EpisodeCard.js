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

export default function EpisodeCard(props) {
  const { episode } = props;

  return (
    <Card>
      <SubTitle>{episode.name}</SubTitle>
      <div className="details">
        <p>Air Date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
      </div>
    </Card>
  )
}
