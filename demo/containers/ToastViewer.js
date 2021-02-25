import styled from 'styled-components';
import { Toast } from '../../src';

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
`;

/**
 * ToastViewer
 * @return {HTMLElement} ToastViewer
 */
export default function ToastViewer() {
  return (
    <div>
      <SendToast onClick={() => Toast.sendToast('Example Toast')}>
        Send Example Toast
      </SendToast>
      <SendToast
        // eslint-disable-next-line max-len
        onClick={() => Toast.sendToast('Example Toast 2sdfjlaskjdfhlaksjdhflakjsdhlkjdsahl')}
      >
        Send Example Toast 2
      </SendToast>
      <Toast
        background="black"
        messageColor="green"
        closeColor="red"
      />
    </div>
  );
}
