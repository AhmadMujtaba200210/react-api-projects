/* eslint-disable no-lone-blocks */

import React, { useState,useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Container,Row,Col } from "react-grid-system";
import { motion} from 'framer-motion';
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

    {/* Auto complete search functionality */}
    
    return(
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <motion.div className="div SearchBarContainer" animate={isExpanded ? "expanded":"collapsed"} variants={containerVariants} ref={ref}>
                    <form action="">
                    <div className="SearchInputContainer">
                    {}
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