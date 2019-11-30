import React from 'react';
import marked from 'marked';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
    display: inline-block;
    width: calc(100% - 10px);
    margin: 0 auto;
    padding: 0 5px;
    font-family:
      ${(props) =>
        props.bodyFontFamily ?
        props.bodyFontFamily :
        'Georgia, Times, serif'};
    font-size: 16px;
    white-space: normal;
    overflow-wrap: break-word;
    color: ${(props) => props.bodyColor ? props.bodyColor : '#333'}
    
    & > h1, & > h2, & > h3 {
        padding-bottom: 3px;
        border-bottom: solid 1px #999;
        font-weight: 400;
        font-family: 
          ${(props) =>
            props.headerFontFamily ?
            props.headerFontFamily :
            'Helvetica, sans-serif'};
        color: ${(props) => props.headerColor ? props.headerColor : '#496bbf'}
    }

    p {
        line-height: ${(props) => props.mobileView ? '18px' : '25px'};
    }

    a, a:visited {
        color: var(--link-color);
        text-decoration: underline;
    }

    a:active {
        color: var(--link-active-color);
    }

    & > img {
        display: block;
        margin: 0 auto;
        padding: 7px;
        text-align: center;
        border: 1px solid var(--body-text-color);
        border-radius: var(--blog-border-radius);
    }

    pre {
        background: var(--code-block-background);
        color: var(--code-block-color);
        padding: 15px;
        overflow-x: auto; 
    }

    code {
        background: var(--code-block-background);
        color: var(--code-block-color);
        padding: 2px 4px;
    }

    pre > code {
        padding: 0 15px 0 0;
    }

    blockquote {
        border-left: solid 3px var(--blockquote-colour);
        color: var(--blockquote-colour);
        padding-left: 10px;
    }

    kbd {
        display: inline-block;
        padding: 2px 5px;
        color: var(--keyboard-text-color);
        border: 1px solid var(--keyboard-border-color);
        border-radius: var(--blog-border-radius);
        box-shadow: 0 1px 0 var(--keyboard-outer-boxshadow), 
                    0 0 0 2px var(--keyboard-inner-boxshadow) inset;
        white-space: nowrap;
    }

    table {
       margin: 0 auto;
       border-collapse: collapse;
    }

    table, td, th {
        border: 1px solid black;
        padding: 10px;
    }
`;

/**
 * Markdown
 */
export default class Markdown extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      mobileView: window.innerWidth > 900 ? false : true,
    };
    this.updateMobileViewTracker = this.updateMobileViewTracker.bind(this);
  }

  /**
   * Component Mounted
   */
  componentDidMount() {
    this.updateMobileViewTracker();
    window.addEventListener('resize', this.updateMobileViewTracker);
  }

  /**
   * Component Unmounting
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMobileViewTracker);
  }

  /**
   * Update Mobile View Tracker
   */
  updateMobileViewTracker() {
    this.setState({
      mobileView: window.innerWidth > 900 ? false : true,
    });
  }

  /**
   * @return {HTMLElement} Markdown
   */
  render() {
    return (
      <StyledMarkdown
        headerFontFamily={this.props.headerFontFamily}
        bodyFontFamily={this.props.bodyFontFamily}
        headerColor={this.props.headerColor}
        bodyColor={this.props.bodyColor}
        mobileView={this.state.mobileView}
        dangerouslySetInnerHTML={{__html: marked(this.props.markdown)}} />
    );
  }
}
