import React from "react";
import styled from 'styled-components';

const SearchSection = styled.div`
  text-align: center;
  margin: 20px auto;
`

const SearchInput = styled.input`
  padding: 5px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid slateblue;
`

export default function SearchForm(props) {
  const { searchCharacters } = props;
  return (
    <SearchSection className="search-form">
     <form>
        <SearchInput 
          type="text" 
          name="search" 
          id="name" 
          placeholder="Search character" 
          onChange={searchCharacters} 
        />
     </form>
    </SearchSection>
  );
}
