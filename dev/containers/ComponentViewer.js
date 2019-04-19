import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
    font-size: 20px;
`

export default class ComponentViewer extends React.Component {
    render() {
        return (
            <div>
                <StyledText>Component Viewer</StyledText>
                <StyledText>{this.props.match.params.id}</StyledText>
            </div>
        )
    }
}