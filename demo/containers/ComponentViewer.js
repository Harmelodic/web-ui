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
    background: #fff;
    width: 50vw;
    min-height: 100vh;
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
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      exampleMarkdown: '',
    };
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    fetch('/res/exampleMarkdown.md')
        .then((response) => response.text().then((data) => {
          this.setState({
            exampleMarkdown: data,
          });
        }));
  }

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
            markdown={this.state.exampleMarkdown}
            headerFontFamily="Helvetica"
            headerColor="#aa0000"
            aTagAttributes='target="_blank" rel="nofollow"'
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
