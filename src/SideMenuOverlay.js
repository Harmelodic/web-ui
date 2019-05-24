import React from "react";
import styled from "styled-components";
import MenuList from "./components/MenuList";

const StyledSideMenu = styled.div`
    height: 100vh;
    width: 80%;
    max-width: 300px;
    min-width: 250px;
    background-color: ${props => props.background ? props.background : "#000000"};
    box-shadow: 0 0 5px 0 #000000;
    color: ${props => props.color ? props.color : "#ffffff"};
    font-size: 0;
`

const SideMenuTitle = styled.div`
    display: inline-block;
    width: calc(100% - 40px);
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    line-height: 60px;
    font-size: 24px;
    overflow-x: auto;
`

const ControlButton = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    border-bottom-right-radius: 5px;
    background-color: ${props => props.background ? props.background : "#000000"};
    box-shadow: 0 0 5px 0 #000000;
`

export default class SideMenuOverlay extends React.Component {
    render() {
        return (
            <StyledSideMenu background={this.props.background} color={this.props.color}>
                <SideMenuTitle>{this.props.title}</SideMenuTitle>
                <ControlButton background={this.props.background} />
                <MenuList menu={this.props.menu} />
            </StyledSideMenu>
        )
    }
} 