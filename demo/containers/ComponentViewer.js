import React from "react";
import styled from "styled-components";
import { Carousel, RatioImage, SideMenu } from "../../src";

const StyledText = styled.div`
    font-size: 20px;
`

const StyledViewer = styled.div`
    display: inline-block;
    border-right: dashed 1px red;
    border-bottom: dashed 1px red;
`

const StyledWrapper = styled.div`
    width: 50vw;
`

export default class ComponentViewer extends React.Component {
    render() {
        document.title = this.props.match.params.id;
        let component;
        let requireWrapper = false;

        switch (this.props.match.params.id) {
            case "Carousel":
                requireWrapper = true;
                component =
                    <Carousel
                        x={16}
                        y={9}
                        images={["/res/jpg.jpg", "/res/png.png", "/res/svg.svg"]}
                    />
                break;
            case "RatioImage":
                requireWrapper = true;
                component =
                    <RatioImage
                        x={4}
                        y={3}
                        src="/res/jpg.jpg"
                    />
                break;
            case "SideMenu":
                component = 
                    <SideMenu
                        background="#333333"
                        color="#ffffff"
                        title="My Menu"
                        menu={[
                            {
                                text: "First Item",
                                href: "#first-item"
                            },
                            {
                                text: "Second Item",
                                href: "#second-item"
                            },
                            {
                                separator: true,
                                size: "10px"
                            },
                            {
                                text: "Third Item",
                                href: "#third-item"
                            }
                        ]}
                    />
                break;
            default:
                component = <StyledText>Could not find component "{this.props.match.params.id}"</StyledText>
                break;
        }

        return (
            <StyledViewer>
                {
                    requireWrapper ?
                        <StyledWrapper>
                            {component}
                        </StyledWrapper>
                    : component
                }
            </StyledViewer>
        )
    }
}