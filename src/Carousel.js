import React from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
    width: 200px;
    height: 200px;
    background: black;
`

export default class Carousel extends React.Component {
    render() {
        return (
            <StyledCarousel />
        )
    }
}