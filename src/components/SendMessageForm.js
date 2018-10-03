import React from "react";

class SendMessageForm extends React.Component{
    constructor(){
        super();
        this.state = {message:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            message:event.target.value
        })
    }
    handleSubmit(e){
        this.setState({message:''})
        e.preventDefault()
        this.props.sendingMessage(this.state.message);
    }
    render(){
        return(
            <div className="from-sending-message">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type something here" onChange={this.handleChange} value={this.state.message} ></input>
                </form>
            </div>
        )
    }
}

export default SendMessageForm;
