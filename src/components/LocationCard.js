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

export default function LocationCard(props) {
  const { location } = props;

  return (
    <Card>
      <SubTitle>{location.name}</SubTitle>
      <div className="details">
        <p>Type: {location.type}</p>
        <p>Residents: {location.residents.length}</p>
      </div>
    </Card>
  )
}
