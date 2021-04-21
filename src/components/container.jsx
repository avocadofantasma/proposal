import React from 'react';
import { useRef } from 'react'

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { random } from 'underscore'

import Title from './title';
import OptionButton from './option-button';


const moveButtonAround = ({ currentTarget }, { offsetWidth, offsetHeight }) => {
    const movementY = random((offsetHeight / 2) * -1, (offsetHeight / 2) - 100);
    const movementX = random((offsetWidth / 2) * -1, (offsetWidth / 2) - 220);

    currentTarget.style["top"] = movementY + "px";
    currentTarget.style["left"] = movementX + "px";
}

const Menu = () => {
    const containerRef = useRef(null);

    return (
        <Container className="p-3" id="main-container" ref={containerRef}>
            <Jumbotron >
                <Row className="justify-content-md-center mb-5">
                    <Title text="¿Quieres ser mi novia?" />
                </Row>
                <Row className="justify-content-md-center align-items-md-center mt-5 options-row" xs={6}>
                    <Col xs={4} md={2}>
                        <OptionButton text="Sí" />
                    </Col>
                    <Col xs={4} md={2}>
                        <OptionButton text="No" handler={e => moveButtonAround(e, containerRef.current)} />
                    </Col>
                </Row>
            </Jumbotron>

        </Container >
    );
}

export default Menu;