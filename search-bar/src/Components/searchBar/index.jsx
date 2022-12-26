/* eslint-disable no-lone-blocks */

import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Container, Row, Col } from "react-grid-system";
import { useClickOutside } from "react-click-outside-hook";
import { motion } from "framer-motion";
import "./style.css";
import { PlacesAutocomplete } from "../maps/autoplacescomplete";


const containerVariants = {
    expanded: {
        height: "20em",
    },
    collapsed: {
        height: "3.8em",
    }
}

const transitionContainer = {
    type: 'spring',
    damping: 22,
    stiffness: 150
}


export function SearchBar() {
    const [isExpanded, setExpanded] = useState(false);
    const [ref, isClickedOutside] = useClickOutside();
    const expandedContainer = () => setExpanded(true);
    const collapseContainer = () => setExpanded(false);
    const [container, setContainer] = useState([]);
    const [value, setValue] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    const clearBtn = (e) => {
        e.preventDefault();
        collapseContainer();
        setValue("");
    }

    const changeHandler = e => {
        setValue(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <motion.div animate={isExpanded ? "expanded" : "collapsed"} transition={transitionContainer} className="SearchBarContainer" variants={containerVariants} ref={ref}>
                        <div className="SearchInputContainer">
                            <span className="SearchIcon"><AiOutlineSearch /></span>
                            <PlacesAutocomplete className="places-container" setSelected={setSelected} />
                            <button onClick={clearBtn} className="CloseIcon"><BsFillBackspaceFill /></button>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}