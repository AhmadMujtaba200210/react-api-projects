/* eslint-disable no-lone-blocks */

import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Container, Row, Col } from "react-grid-system";
import { useClickOutside } from "react-click-outside-hook";
import { motion } from "framer-motion";
import "./style.css";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";



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
    const [value1, setValue1] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    const clearBtn = (e) => {
        e.preventDefault();
        collapseContainer();
        setValue1("");
    }

    const changeHandler = e => {
        setValue1(e.target.value);
    }

    // AutoComplete functionality here
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    };

    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <motion.div animate={isExpanded ? "expanded" : "collapsed"} transition={transitionContainer} className="SearchBarContainer" variants={containerVariants} ref={ref}>
                        <div className="SearchInputContainer">
                            <span className="SearchIcon"><AiOutlineSearch /></span>
                            
                                <input type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    disabled={!ready}
                                    placeholder="Search an address"
                                    className="places"
                                    onFocus={expandedContainer}
                                />
                                
                            {/* Combobox start */}

                            {/* <Combobox onSelect={handleSelect} className="places-container"
                            >
                                <ComboboxInput
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    disabled={!ready}
                                    placeholder="Search an address"
                                    onSelect={handleSelect}
                                />
                                <ComboboxPopover>
                                    <ComboboxList>
                                        {status === "OK" &&
                                            data.map(({ place_id, description }) => (
                                                <ComboboxOption key={place_id} value={description} />
                                            ))}
                                    </ComboboxList>
                                </ComboboxPopover>
                            </Combobox>
 */}


                            {/* ComboBox end */}

                            <button onClick={clearBtn} className="CloseIcon"><BsFillBackspaceFill /></button>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    )
}