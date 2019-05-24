import React from "react";
import styled from "styled-components";
import { Carousel, RatioImage, SideMenuOverlay } from "../../src";

const StyledViewer = styled.div`
    background: #999999;
    width: 50vw;
    height: 100vh;
`

const StyledText = styled.div`
    padding: 20px;
    font-size: 24px;
    color: #fff;
`

export default class ComponentViewer extends React.Component {
    render() {
        document.title = this.props.match.params.id;
        let component;

        switch (this.props.match.params.id) {
            case "Carousel":
                component =
                    <Carousel
                        x={16}
                        y={9}
                        images={["/res/jpg.jpg", "/res/png.png", "/res/svg.svg"]}
                    />
                break;
            case "RatioImage":
                component =
                    <RatioImage
                        x={4}
                        y={3}
                        src="/res/jpg.jpg"
                    />
                break;
            case "SideMenuOverlay":
                let menu = Array.apply(null, { length: 25 }).map(Number.call, Number).map(number => { return { text: `Item ${number}`, href: `#something${number}` } });
                component =
                    <SideMenuOverlay
                        background="#333333"
                        color="#ffffff"
                        title="My Menu"
                        menu={menu}
                    />
                break;
            default:
                component = <StyledText>Could not find component "{this.props.match.params.id}"</StyledText>
                break;
        }

        return (
            <StyledViewer>
                {component}
            </StyledViewer>
        )
    }
}