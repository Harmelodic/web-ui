import React from "react";
import styled from "styled-components";

const StyledSideMenu = styled.div`
    background-color: ${props => props.background ? props.background : "#000000"};
    height: 100vh;
    width: 80%;
    max-width: 300px;
    min-width: 250px;
    font-size: 0;
    color: ${props => props.color ? props.color : "#ffffff"};
`

const StyledTitle = styled.div`
    margin-bottom: 5px;
    width: calc(100% - 20px);
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    line-height: 60px;
    font-size: 24px;
`

const StyledMenuItem = styled.a`
    display: block;
    background: rgba(0, 0, 0, 0);
    width: calc(100% - 20px);
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 20px;
    text-decoration: none;
    color: ${props => props.color ? props.color : "#ffffff"};
    transition: background 400ms;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`

const StyledSeparator = styled.div`
    width: 100%;
    height: ${props => props.size};
`

export default class SideMenu extends React.Component {
    render() {
        return (
            <StyledSideMenu background={this.props.background} color={this.props.color}>
                <StyledTitle>{this.props.title}</StyledTitle>
                {
                    this.props.menu
                        .map(menuItem => {
                            if (menuItem.separator) {
                                return (
                                    <StyledSeparator size={menuItem.size} />
                                )
                            }
                            return (
                                <StyledMenuItem color={this.props.color} href={menuItem.href}>{menuItem.text}</StyledMenuItem>
                            )
                        })
                }
            </StyledSideMenu>
        )
    }
} 