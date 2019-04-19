import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
    font-size: 20px;
`

const StyledLink = styled.a`
    font-size: 20px;
`

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <StyledText>Home</StyledText>Home
                <StyledLink href="/something">Something</StyledLink>
            </div>
        )
    }
}