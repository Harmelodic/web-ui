import React from "react";
import styled from "styled-components";

const StyledRatioWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: ${props => props.ratioPercent}%;
    background-color: ${props => props.backgroundColor};
`

const StyledRatioInnerWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
`

const StyledContainedImage = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: contain; 
    background-position: center;
`

const StyledOverlay = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
`

export default class RatioImage extends React.PureComponent {
    render() {
        return (
            <StyledRatioWrapper ratioPercent={(100 / parseInt(this.props.x)) * parseInt(this.props.y)} backgroundColor={this.props.backgroundColor || "#000"}>
                <StyledRatioInnerWrapper>
                    <StyledContainedImage src={this.props.src} />
                    <StyledOverlay>
                        {this.props.children}
                    </StyledOverlay>
                </StyledRatioInnerWrapper>
            </StyledRatioWrapper>
        )
    }
}