import React from "react";
import styled from "styled-components";

const ToastWrapper = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 0;
  max-height: 50vh;
  overflow-y: scroll;
`

const StyledToast = styled.div`
  opacity: 0;
  margin: 0 20px 20px 20px;
  border-radius: 5px;
  height: 60px;
  max-width: 300px;
  width: calc(100vw - 40px);
  background: ${props => props.background ? props.background : "#333"};
  animation: complete-fade-out 4s;

  @keyframes complete-fade-out {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`

const ToastMessage = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 60px - 40px);
  margin: 0 20px;
  font-size: 20px;
  line-height: 60px;
  color: ${props => props.color ? props.color : "#fff"};
  overflow-x: auto;
  user-select: none;
`

const CloseToast = styled.div`
  display: inline-block;
  margin: 12px;
  height: 36px;
  width: 36px;
  border-radius: 5px;
  background: rgba(0,0,0,0);
  transition: background 200ms;

  &:hover {
    cursor: pointer;
    background: rgba(0,0,0,0.3);
  }

  &:active {
    background: rgba(0,0,0,0.6);
  }

`

const CloseToastSymbol = styled.svg`
  margin: 0;
  width: 100%;
  height: 100%;
  & > path {
    fill: ${props => props.color ? props.color: "#fff"};
  }
`

export default class Toast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toasts: []
    }
    
    this.pushToast = this.pushToast.bind(this);
    this.closeToast = this.closeToast.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }


  componentDidMount() {
    window.addEventListener('CREATE_TOAST', this.pushToast);
  }

  componentDidUpdate() {
    if (this.state.toasts.length !== 0) {
      this.scrollToBottom();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('CREATE_TOAST', this.pushToast);
  }

  pushToast(event) {
    const newToasts = Object.assign([], this.state.toasts);
    newToasts.push(event.detail.toast);
    this.setState({
      toasts: newToasts
    })
    setTimeout(() => {
      this.closeToast(event.detail.toast);
    }, 5000)
  }

  scrollToBottom() {
    this.toast.scrollIntoView({ behavior: 'smooth' });
  }

  closeToast(toastToClose) {
    const newToasts = this.state.toasts.filter(toast => toast.timestamp !== toastToClose.timestamp);
    this.setState({
      toasts: newToasts
    })
  }
  
  static sendToast(text) {
    window.dispatchEvent(new CustomEvent("CREATE_TOAST", { detail: {
      toast: {
        message: text,
        timestamp: (new Date()).getUTCMilliseconds()
      }
    }}));
  }

  render() {
    return (
      <ToastWrapper>
        {
          this.state.toasts.map((toast, index) => {
            return (
              <StyledToast 
                key={index} 
                ref={toast => { this.toast = toast; }}
                background={this.props.background}
              >
                <ToastMessage color={this.props.messageColor}>{toast.message}</ToastMessage>
                <CloseToast onClick={() => this.closeToast(toast)}>
                  <CloseToastSymbol color={this.props.closeColor}>
                    <path
                      d="M 610.9,499.9 967,856 c 30.7,30.7 30.7,80.4 0,111 -30.7,30.7 -80.4,30.7 -111,0 L 499.9,610.9 143.7,967.1 C 113.1,997.7 63.6,997.7 33,967.1 2.4,936.5 2.4,887 33,856.4 L 389.2,500.2 33,144 C 2.3,113.3 2.3,63.6 33,33 63.7,2.3 113.4,2.3 144,33 L 500.2,389.2 853.9,35.5 c 30.6,-30.6 80.1,-30.6 110.7,0 30.6,30.6 30.6,80.1 0,110.7 z"
                      transform="matrix(-0.01224998,0,0,-0.01224998,24.12499,24.125143)"
                      />
                  </CloseToastSymbol>
                </CloseToast>
              </StyledToast>
            )})
        }
      </ToastWrapper>
    )
  }
}