import React from 'react';
import styled from 'styled-components';
import {
  Carousel,
  Markdown,
  RatioImage,
  SideMenu,
  SideMenuOverlay,
} from '../../src';
import ToastViewer from './ToastViewer';

const StyledViewer = styled.div`
    background: #999999;
    width: 50vw;
    height: 100vh;
`;

const StyledText = styled.div`
    padding: 20px;
    font-size: 24px;
    color: #fff;
`;

/**
 * ComponentViewer
 */
export default class ComponentViewer extends React.Component {
  /**
   * @return {HTMLElement} ComponentViewer
   */
  render() {
    document.title = this.props.match.params.id;
    let container;
    const menu = Array(...[null, {length: 27}])
        .map(Number.call, Number)
        .map((number) => {
          if (number === 0 || number % 5 !== 0) {
            return {
              text: `Item ${number}`,
              href: `#something${number}`,
            };
          } else {
            return {
              separator: true,
              size: '20px',
            };
          }
        });

    switch (this.props.match.params.id) {
      case 'Carousel':
        container =
          <Carousel
            x={16}
            y={9}
            images={['/res/jpg.jpg', '/res/png.png', '/res/svg.svg']}
          />;
        break;
      case 'Markdown':
        container =
          <Markdown
            markdown="# Some Title"
            headerFontFamily="Courier"
            headerColor="#aa0000"
          />;
        break;
      case 'RatioImage':
        container =
          <RatioImage
            x={4}
            y={3}
            src="/res/jpg.jpg"
          />;
        break;
      case 'SideMenu':
        container =
          <SideMenu
            background="#800000"
            color="#ffffff"
            title="My Menu"
            menu={menu}
          />;
        break;
      case 'SideMenuOverlay':
        container =
          <SideMenuOverlay
            background="#800000"
            color="#ffffff"
            title="My Menu"
            menu={menu}
          />;
        break;
      case 'Toast':
        container = <ToastViewer />;
        break;
      default:
        container =
          <StyledText>
            Could not find component "{this.props.match.params.id}"
          </StyledText>;
        break;
    }

    return (
      <StyledViewer>
        {container}
      </StyledViewer>
    );
  }
}
