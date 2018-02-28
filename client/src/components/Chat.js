import React from "react";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  clientId = null;

  componentDidMount() {
    fetch("http://localhost:3001/clientId")
    .then( (response) => {
      return response.text();
    }).then((id) => {
      this.clientId = id;
    });

  }
  render() {
    let messagesDiv = null;//
    if(this.props.messages){
      messagesDiv = this.props.messages.map((m,i) => {
        return <div key={i}>{m.clientId}: {m.text}</div>
      });
    }
    return (
      <div>
        <div>
          <h1>Chat</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createMessage) {
              this.props.createMessage({
                clientId:this.clientId,
                text: this.state.message}
              );
            }
          }}>
            <div>
              Message: <input onChange={(e) => {
                const message = e.target.value;
                this.setState({message});
              }} />
            </div>
            <button>Send</button>
            {messagesDiv}
          </form>
        </div>        
      </div>
      
    );
  }
}
export default Chat;
