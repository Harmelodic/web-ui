import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
    padding-left: 20px;
    line-height: 32px;
    font-size: 18px;
    color: #fff;
`

const StyledLink = styled.a`
    color: lightblue;

    &:focus, &:active {
        color: pink;
    }
`

export default class Home extends React.Component {
    render() {
        return (
            <StyledHome>
                <h1>react-ui-lib</h1>
                <ul>
                    <li><StyledLink href="/Carousel">Carousel</StyledLink></li>
                    <li><StyledLink href="/RatioImage">RatioImage</StyledLink></li>
                </ul>
            </StyledHome>
        )
    }
}