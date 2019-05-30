import React from 'react';
import styled from 'styled-components';
import RatioImage from './RatioImage';

const StyledCarouselOverlaySection = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    transition: opacity 200ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.4;
    }
`;
/**
 * Carousel
 */
export default class Carousel extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      imageInView: 0,
    };

    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  /**
   * Go to previous picture
   */
  onClickLeft() {
    let indexOfImageToMoveTo;
    if (this.state.imageInView === 0) {
      indexOfImageToMoveTo = this.props.images.length - 1;
    } else {
      indexOfImageToMoveTo = this.state.imageInView - 1;
    }
    this.setState({
      imageInView: indexOfImageToMoveTo,
    });
  }

  /**
   * Go to next picture
   */
  onClickRight() {
    let indexOfImageToMoveTo;
    if (this.state.imageInView === (this.props.images.length - 1)) {
      indexOfImageToMoveTo = 0;
    } else {
      indexOfImageToMoveTo = this.state.imageInView + 1;
    }
    this.setState({
      imageInView: indexOfImageToMoveTo,
    });
  }

  /**
   * @return {HTMLElement} Carousel
   */
  render() {
    return (
      <div>
        {
          this.props.images && this.props.images.length > 0 &&
                    <RatioImage
                      x={this.props.x}
                      y={this.props.y}
                      src={this.props.images &&
                        this.props.images[this.state.imageInView]}
                      backgroundColor={this.props.backgroundColor}>
                      {
                        this.props.images.length > 1 &&
                            <StyledCarouselOverlaySection
                              onClick={this.onClickLeft} />
                      }
                      {
                        this.props.images.length > 1 &&
                            <StyledCarouselOverlaySection
                              onClick={this.onClickRight} />
                      }
                    </RatioImage>
        }
      </div>
    );
  }
}
