import React from "react";
import styled from "styled-components";
import { Carousel } from "../../src";

const StyledText = styled.div`
    font-size: 20px;
`

export default class ComponentViewer extends React.Component {
    render() {
        let component;

        switch (this.props.match.params.id) {
            case "carousel":
                component = <Carousel />
                break;
            default:
                component = <StyledText>Could not find component "{this.props.match.params.id}"</StyledText>
                break;
        }

        return (component)
    }
}