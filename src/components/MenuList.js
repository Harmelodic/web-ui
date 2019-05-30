import React from 'react';
import styled from 'styled-components';

const StyledMenuItemList = styled.div`
    display: block;
    margin-top: 5px;
    width: 100%;
    height: calc(100% - 215px);
    padding-bottom: 150px;
    overflow-y: auto;
`;

const StyledMenuItem = styled.a`
    display: block;
    background: rgba(0, 0, 0, 0);
    width: calc(100% - 20px);
    height: 50px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 20px;
    text-decoration: none;
    color: inherit;
    transition: background 400ms;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;

const StyledSeparator = styled.div`
    width: 100%;
    height: ${(props) => props.size};
`;


/**
 * MenuList
 */
export default class MenuList extends React.Component {
  /**
   * @return {HTMLElement} MenuList
   */
  render() {
    return (
      <StyledMenuItemList>
        {
          this.props.menu
              .map((menuItem, index) => {
                if (menuItem.separator) {
                  return (
                    <StyledSeparator key={index} size={menuItem.size} />
                  );
                }
                return (
                  <StyledMenuItem
                    key={index}
                    href={menuItem.href}
                    onClick={this.props.onClickMenuItem}
                  >
                    {menuItem.text}
                  </StyledMenuItem>
                );
              })
        }
      </StyledMenuItemList>
    );
  }
}
