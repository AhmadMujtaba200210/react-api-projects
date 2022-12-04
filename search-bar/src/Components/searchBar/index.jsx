import React from "react";
import styled from "styled-components";

const SearchBarContainer= styled.div`
    display:flex;
    flex-direction:column;
    width:34rem;
    height:3.8rem;
    background-color:#fff;
    border-radius:6px;
    box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
    overflow:hidden;
`;

const SearchBarInputContainer= styled.div`
    width:100%;
    min-height:4rem;
    display:flex;
    align-items:center;
    position:relative;
    padding:2px 15px;
`;

const SearchInput=styled.div`
    width:100%;
    height:100%;
    outline:none;
    border:none;
    font-size:25px;
    color:#12112e;
    border-radius:6px;
    font-weight:500;
    background-color:transparent;

    &::focus{
    outline:none;
    &::placeholder{
        opacity:0;
    }
    }

    &::placeholder{
        color:#bebebebe;
        transition:all 250ms ease-in-out;
    }
    
`;




export function SearchBar(props){
    return(
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchInput placeholder="Search for Movies/Series"></SearchInput>
            </SearchBarInputContainer>
        </SearchBarContainer>
    )
}
