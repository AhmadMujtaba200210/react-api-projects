import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
const SearchBarContainer= styled.div`
    display:flex;
    width:32rem;
    height:3.8rem;
    background-color:#blue;
    border-radius:6px;
    box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
    align-items:center;
    align-content:center;
    
`;



const SearchInput=styled.input`
    width:100%;
    height:100%;
    outline:none;
    border:none;
    font-size:18px;
    color:#12112e;
    border-radius:6px;
    font-weight:500;
    padding:0;
    margin:0;

    &:focus{
    &::placeholder{
        opacity:0;
    }
    }

    &::placeholder{
        color:#bebebe;
        transition:all 250ms ease-in-out;
    }
    
`;
const SearchIcon=styled.span`
    color:#bebebe;
   
    cursor:pointer;
    margin-top:5px;
   
    font-size:30px;
    
`;


const CloseIcon=styled.span`
    color:#bebebe;
    vertical-align:middle;
    cursor:pointer;
    transition:all 200ms ease-in-out;
    font-size:30px;
    margin-top:8px;
    
    &:hover{
        color:#beebee;
    }
`;

export function SearchBar(props){
    return(
        <SearchBarContainer>
                <SearchIcon><AiOutlineSearch/></SearchIcon>
                <SearchInput placeholder="Search for Movies/Series"></SearchInput>
                <CloseIcon><BsFillBackspaceFill/></CloseIcon>
        </SearchBarContainer>
    )
}
