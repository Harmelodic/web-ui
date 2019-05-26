import React from "react";
import styled, { css } from "styled-components";
import MenuList from "./components/MenuList";

const StyledSideMenu = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.open ? "0" : "-300px"}
    height: 100vh;
    width: 300px;
    background-color: ${props => props.background ? props.background : "#000000"};
    box-shadow: 0 0 5px 0 #000000;
    color: ${props => props.color ? props.color : "#ffffff"};
    font-size: 0;

    ${props => props.open && css`
        animation: 200ms openSideBarOverlay;

        @keyframes openSideBarOverlay {
            from {
                left: -300px;
            }

            to {
                left: 0;
            }
        }
    `}

    ${props => !props.open && !props.firstLoad && css`
        animation: 200ms closeSideBarOverlay;

        @keyframes closeSideBarOverlay {
            from {
                left: 0;
            }

            to {
                left: -300px;
            }
        }
    `}
`

const SideMenuTitle = styled.div`
    display: inline-block;
    width: ${props => props.open ? "calc(100% - 100px)" : "calc(100% - 40px)"};
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    line-height: 60px;
    font-size: 24px;
    overflow-x: auto;

    ${props => props.open && css`
        animation: 200ms shiftControlButtonIn;

        @keyframes shiftControlButtonIn {
            from {
                width: calc(100% - 40px);
            }

            to {
                width: calc(100% - 100px);
            }
        }
    `}

    ${props => !props.open && !props.firstLoad && css`
        animation: 200ms shiftControlButtonOut;

        @keyframes shiftControlButtonOut {
            from {
                width: calc(100% - 100px);
            }

            to {
                width: calc(100% - 40px);
            }
        }
    `}
`

const ControlButton = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    border-bottom-right-radius: 5px;
    background-color: ${props => props.background ? props.background : "#000000"};
    box-shadow: ${props => props.open ? "none" : "0 0 5px 0 #000000"};
`

const BurgerMenu = styled.svg`
    width: 60px;
    height: 60px;
`

export default class SideMenuOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            firstLoad: true
        }

        this.switchCollapsedState = this.switchCollapsedState.bind(this);
        this.close = this.close.bind(this);
    }

    switchCollapsedState() {
        this.setState({
            open: !this.state.open,
            firstLoad: false
        })
    }

    close() {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <StyledSideMenu firstLoad={this.state.firstLoad} open={this.state.open} background={this.props.background} color={this.props.color}>
                <SideMenuTitle firstLoad={this.state.firstLoad} open={this.state.open}>
                    {this.props.title}
                </SideMenuTitle>
                <ControlButton
                    open={this.state.open}
                    background={this.props.background}
                    onClick={this.switchCollapsedState}
                >
                    <BurgerMenu>
                        <path
                            d="m 18,24 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 z m 24,4 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z m 0,8 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z"
                            style={{ fill: this.props.color ? this.props.color : "#000000" }}
                        />
                    </BurgerMenu>
                </ControlButton>
                <MenuList menu={this.props.menu} onClickMenuItem={this.close} />
            </StyledSideMenu>
        )
    }
} 