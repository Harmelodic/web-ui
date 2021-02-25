import { useState } from 'react';
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
 * @param {any} props - React component props - Required: images, x and y
 * @return {HTMLElement} Carousel
 */
export default function Carousel(props) {
  const [imageInView, setImageInView] = useState(0);

  /**
   * Go to previous picture
   */
  function onClickLeft() {
    let indexOfImageToMoveTo;
    if (imageInView === 0) {
      indexOfImageToMoveTo = props.images.length - 1;
    } else {
      indexOfImageToMoveTo = imageInView - 1;
    }
    setImageInView(indexOfImageToMoveTo);
  }

  /**
   * Go to next picture
   */
  function onClickRight() {
    let indexOfImageToMoveTo;
    if (imageInView === (props.images.length - 1)) {
      indexOfImageToMoveTo = 0;
    } else {
      indexOfImageToMoveTo = imageInView + 1;
    }
    setImageInView(indexOfImageToMoveTo);
  }

  return (
    <div>
      {
        props.images && props.images.length > 0 &&
                  <RatioImage
                    x={props.x}
                    y={props.y}
                    src={props.images &&
                      props.images[imageInView]}
                    backgroundColor={props.backgroundColor}>
                    {
                      props.images.length > 1 &&
                          <StyledCarouselOverlaySection
                            onClick={onClickLeft} />
                    }
                    {
                      props.images.length > 1 &&
                          <StyledCarouselOverlaySection
                            onClick={onClickRight} />
                    }
                  </RatioImage>
      }
    </div>
  );
}
