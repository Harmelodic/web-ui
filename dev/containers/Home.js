import React from "react";
import styled from "styled-components";
import components from "../../src";

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
                    {
                        components.map(component => <li key={component}><StyledLink href={"/" + component}>{component}</StyledLink></li>)
                    }
                </ul>
            </StyledHome>
        )
    }
}