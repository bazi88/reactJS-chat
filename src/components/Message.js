import React from "react";

class Message extends React.Component{
    render(){
        return(
            <div>
                <div className="message-sender">{this.props.username}</div>
                 <div className="message-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Message;
