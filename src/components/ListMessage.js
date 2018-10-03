import React from "react";
import Message from './Message';

const DUMMY_DATA = [
    {
        senderId:"Jonny",
        text:"Hi all"
    },
    {
        senderId:"Larry",
        text:"Hi all"
    },
    {
        senderId:"Monny",
        text:"Hi all"
    },
]

class ListMessage extends React.Component{
    render(){
        return(
            <div className="message-list">
                {this.props.messages.map((message,index)=>{
                    return(
                        <Message key={index} className="message" username={message.senderId} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default ListMessage;
