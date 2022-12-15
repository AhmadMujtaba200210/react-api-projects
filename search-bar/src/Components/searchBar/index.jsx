
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Container,Row,Col } from "react-grid-system";
import { motion} from 'framer-motion/dist/framer-motion';
import {useClickOutside} from "react-click-outside-hook";
const SearchBarContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.8em;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    horizontal-align: middle;
    overflow: hidden;
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
    overflow: hidden;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 80%;
    outline: none;
    border: none;
    font-size: 21px;
    color: #12112e;
    font-weight: 500;
    border-radius: 6px;
    padding-left: 5px;

    &:focus {
    outline: none;
    &::placeholder {
    opacity: 0;
    }
    }
    &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
    }
`;

const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 27px;
    margin-right: 10px;
    margin-top: 6px;
    vertical-align: middle;
`;

const CloseIcon = styled.button`
    color: #bebebe;
    font-size: 23px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    margin-right: 20px;
    background-color: transparent;
    border:none;
    &:hover {
    color: #dfdfdf;
    }
`;

const containerVariants={
    expanded:{
        height:"20em",
    },
    collapsed:{
        height:"3.8em",
    }
}


export function SearchBar(){
    const [isExpanded,setExpanded] = useState(false);
    const [ref,isClickedOutside] = useClickOutside();
    const expandedContainer=()=> setExpanded(true);
    const collapseContainer=()=> setExpanded(false);
    const [value,setValue]= useState("");
    
    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    const clearBtn=e=>{
        e.preventDefault();
        collapseContainer();
        setValue("");
    }

    const changeHandler=e=>{
        setValue(e.target.value);
    }
    return(
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <form>
        <SearchBarContainer  animate={isExpanded ? "expanded":"collapsed"} variants={containerVariants} ref={ref}>
            <SearchInputContainer>
            <SearchIcon><AiOutlineSearch/></SearchIcon>
                <SearchInput placeholder="Search for Movies/Series" onFocus={expandedContainer} value={value} onChange={changeHandler}></SearchInput>
                <CloseIcon onClick={clearBtn}><BsFillBackspaceFill/></CloseIcon>
            </SearchInputContainer>
        </SearchBarContainer>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}