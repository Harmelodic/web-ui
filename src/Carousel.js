import React from "react";
import styled from "styled-components";
import RatioImage from "./RatioImage";

const StyledCarouselOverlaySection = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    background-image: url('${props => props.arrow}');
    background-repeat: no-repeat;
    background-size: 10%;
    background-position: ${props => props.position};
    opacity: 0;
    transition: opacity 400ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInView: 0
        }

        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
    }

    onClickLeft() {
        let indexOfImageToMoveTo;
        if (this.state.imageInView === 0) {
            indexOfImageToMoveTo = this.props.images.length - 1
        }
        else {
            indexOfImageToMoveTo = this.state.imageInView - 1
        }
        this.setState({
            imageInView: indexOfImageToMoveTo
        })
    }

    onClickRight() {
        let indexOfImageToMoveTo;
        if (this.state.imageInView === (this.props.images.length - 1)) {
            indexOfImageToMoveTo = 0;
        }
        else {
            indexOfImageToMoveTo = this.state.imageInView + 1;
        }
        this.setState({
            imageInView: indexOfImageToMoveTo
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.images && this.props.images.length > 0 &&
                    <RatioImage x={this.props.x} y={this.props.y} src={this.props.images && this.props.images[this.state.imageInView]}>
                        {
                            this.props.images.length > 1 &&
                            <StyledCarouselOverlaySection
                                onClick={this.onClickLeft}
                                position="left"
                                arrow="/images/LeftArrow.svg"
                            />
                        }
                        {
                            this.props.images.length > 1 &&
                            <StyledCarouselOverlaySection
                                onClick={this.onClickRight}
                                position="right"
                                arrow="/images/RightArrow.svg"
                            />
                        }
                    </RatioImage>
                }
            </div>
        )
    }
}
