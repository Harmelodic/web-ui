import { useState } from 'react';
import styled, { css } from 'styled-components';
import MenuList from './components/MenuList';

const StyledSideMenu = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.open ? '0' : '-300px'};
    height: 100vh;
    width: 300px;
    background-color:
      ${props => props.background ? props.background : '#000000'};
    box-shadow: 0 0 5px 0 #000000;
    color: ${props => props.color ? props.color : '#ffffff'};
    font-size: 0;

    ${props => props.open && css`
        animation: 200ms openSideBarOverlay;

        @keyframes openSideBarOverlay {
            from {
                left: -300px;
            }

            to {
                left: 0;
            }
        }
    `}

    ${props => !props.open && !props.firstLoad && css`
        animation: 200ms closeSideBarOverlay;

        @keyframes closeSideBarOverlay {
            from {
                left: 0;
            }

            to {
                left: -300px;
            }
        }
    `}
`;

const SideMenuTitle = styled.div`
    display: inline-block;
    width: ${props => props.open ? 'calc(100% - 100px)' : 'calc(100% - 40px)'};
    height: 60px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 20px;
    line-height: 60px;
    font-size: 24px;
    overflow-x: auto;

    ${props => props.open && css`
        animation: 200ms shiftControlButtonIn;

        @keyframes shiftControlButtonIn {
            from {
                width: calc(100% - 40px);
            }

            to {
                width: calc(100% - 100px);
            }
        }
    `}

    ${props => !props.open && !props.firstLoad && css`
        animation: 200ms shiftControlButtonOut;

        @keyframes shiftControlButtonOut {
            from {
                width: calc(100% - 100px);
            }

            to {
                width: calc(100% - 40px);
            }
        }
    `}
`;

const ControlButton = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    border-bottom-right-radius: 5px;
    background-color: ${props => props.background ? props.background : '#000000'};
    box-shadow: ${props => props.open ? 'none' : '0 0 5px 0 #000000'};
`;

const BurgerMenu = styled.svg`
    width: 60px;
    height: 60px;
`;

/**
 * SideMenuOverlay
 * @param {*} props - React component props
 * Required: title and menu
 * Optional: background and color
 * @return {HTMLElement} SideMenuOverlay
 */
export default function SideMenuOverlay(props) {
	const [open, setOpen] = useState(false);
	const [firstLoad, setFirstLoad] = useState(true);

	function switchCollapsedState() {
		setOpen(!open);
		setFirstLoad(false);
	}

	function close() {
		setOpen(false);
	}

	return (
		<StyledSideMenu
			firstLoad={firstLoad}
			open={open}
			background={props.background}
			color={props.color}
		>
			<SideMenuTitle firstLoad={firstLoad} open={open}>
				{props.title}
			</SideMenuTitle>
			<ControlButton
				open={open}
				background={props.background}
				onClick={switchCollapsedState}
			>
				<BurgerMenu>
					<path
						// eslint-disable-next-line max-len
						d="m 18,24 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 z m 24,4 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z m 0,8 H 18 c -1.104,0 -2,0.896 -2,2 0,1.104 0.896,2 2,2 h 24 c 1.104,0 2,-0.896 2,-2 0,-1.104 -0.896,-2 -2,-2 z"
						style={{ fill: props.color ? props.color : '#000000' }}
					/>
				</BurgerMenu>
			</ControlButton>
			<MenuList menu={props.menu} onClickMenuItem={close} />
		</StyledSideMenu>
	);
}
