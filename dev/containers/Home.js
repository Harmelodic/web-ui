import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
    padding-left: 20px;
    font-size: 18px;
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <h1>react-ui-lib</h1>
                <ul>
                    <li><a href="/Carousel">Carousel</a></li>
                    <li><a href="/RatioImage">RatioImage</a></li>
                </ul>
            </StyledHome>
        )
    }
}