
import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Container,Row,Col } from "react-grid-system";
import { motion} from 'framer-motion/dist/framer-motion';
import {useClickOutside} from "react-click-outside-hook";
import "./style.css";


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
    const [container,setContainer]=useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4dc9e30b52msh53ed92d97147bfap1a7a51jsn7ec3a25a2121',
            'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
        }
    };
    fetch(`https://opentripmap-places-v1.p.rapidapi.com/%7Blang%7D/places/geoname?q=+${value}`, options)
        .then(response => response.json())
        .then(data => setContainer(data)) //storing data from server
        .catch(err => console.error(err));

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
                    <motion.div className="div SearchBarContainer" animate={isExpanded ? "expanded":"collapsed"} variants={containerVariants} ref={ref}>
                    <form action="">
                    <div className="SearchInputContainer">
                    {/* {container.map((item,index)=>{
                    return (
                        <div key={index} class="container">
                            <ul>
                                <li>{item.country}</li>
                                <li>{item.name}</li>
                            </ul>
                        </div>
                    )
                    })} */}
                    <span className="SearchIcon"><AiOutlineSearch/></span>
                    <input type="text" className="SearchInput" placeholder="Search for Movies/Series"  onFocus={expandedContainer} value={value} onChange={changeHandler}/>
                    <button onClick={clearBtn} className="CloseIcon"><BsFillBackspaceFill/></button>
                    </div>
                    </form>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}