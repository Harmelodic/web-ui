import React from "react";
import styled from "styled-components";
import { Toast } from "../../src";

const SendToast = styled.div`
  font-size: 32px;
  color: darkblue;
  user-select: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: darkred;
  }
`

export default class ToastViewer extends React.Component {
  render() {
    return (
      <div>
        <SendToast onClick={() => Toast.sendToast("Example Toast")}>Send Example Toast</SendToast>
        <SendToast onClick={() => Toast.sendToast("Example Toast 2sdfjlaskjdfhlaksjdhflakjsdhlkjdsahl")}>Send Example Toast 2</SendToast>
        <Toast
          background="white"
          messageColor="green"
          closeColor="red"
        />
      </div>
    )
  }
}