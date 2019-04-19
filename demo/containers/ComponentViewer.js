import React from "react";
import styled from "styled-components";
import { Carousel, RatioImage } from "../../src";

const StyledText = styled.div`
    font-size: 20px;
`

const StyledViewer = styled.div`
    width: 50vw;
    border-right: dashed 1px red;
    border-bottom: dashed 1px red;
`

export default class ComponentViewer extends React.Component {
    render() {
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
                        x={16}
                        y={9}
                        src="/res/jpg.jpg"
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