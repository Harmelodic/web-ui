import { useEffect, useState } from 'react';
import marked from 'marked';
import styled from 'styled-components';

const StyledMarkdown = styled.div`
    display: inline-block;
    width: calc(100% - 10px);
    margin: 0 auto;
    padding: 0 5px;
    font-family:
      ${props =>
		props.bodyFontFamily ?
			props.bodyFontFamily :
			'Georgia, Times, serif'};
    font-size: 16px;
    white-space: normal;
    overflow-wrap: break-word;
    color: ${props => props.bodyColor ? props.bodyColor : '#333'}
    
    & > h1, & > h2, & > h3 {
        padding-bottom: 3px;
        border-bottom: solid 1px #999;
        font-weight: 400;
        font-family: 
          ${props =>
		props.headerFontFamily ?
			props.headerFontFamily :
			'Helvetica, sans-serif'};
        color: ${props => props.headerColor ? props.headerColor : '#496bbf'}
    }

    p {
        line-height: ${props => props.mobileView ? '18px' : '25px'};
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
       font-family: 
        ${props =>
		props.headerFontFamily ?
			props.headerFontFamily :
			'Helvetica, sans-serif'};
    }

    table, td, th {
        border: 1px solid #cccccc;
        padding: 10px;
    }
`;

/**
 * Markdown
 * @param {*} props
 * @return {HTMLElement} Markdown
 */
export default function Markdown(props) {
	const [mobileView, setMobileView] = useState(window.innerWidth > 900 ? false : true);

	function updateMobileViewTracker() {
		setMobileView(window.innerWidth > 900 ? false : true);
	}

	useEffect(() => {
		updateMobileViewTracker();
		window.addEventListener('resize', updateMobileViewTracker);

		return function cleanup() {
			window.removeEventListener('resize', updateMobileViewTracker);
		};
	}, []);

	const aTagAttributes = props.aTagAttributes ? props.aTagAttributes : '';

	const renderer = new marked.Renderer();
	const linkRenderer = renderer.link;

	renderer.link = (href, title, text) => {
		const html = linkRenderer.call(renderer, href, title, text);
		return html.replace(/^<a /, `<a ${aTagAttributes} `);
	};

	return (
		<StyledMarkdown
			headerFontFamily={props.headerFontFamily}
			bodyFontFamily={props.bodyFontFamily}
			headerColor={props.headerColor}
			bodyColor={props.bodyColor}
			mobileView={mobileView}
			dangerouslySetInnerHTML={{
				__html: marked(props.markdown, { renderer }),
			}} />
	);
}
