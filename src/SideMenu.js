import React from "react";
import styled from "styled-components";

const StyledSideMenu = styled.div`
    background-color: ${props => props.background ? props.background : "#333333"};
    height: 100vh;
    width: 80%;
    max-width: 300px;
    min-width: 250px;
`

export default class SideMenu extends React.Component {
    render() {
        return (
            <StyledSideMenu background={this.props.background} />
        )
    }
} 