import React from "react";
import Chatkit from '@pusher/chatkit'
import ListMessage from './src/components/ListMessage';
import NewRoomFrom from './src/components/NewRoomFrom';
import RoomList from './src/components/RoomList';
import SendMessageForm from './src/components/SendMessageForm';

import {tokenUrl, instanceLocator,userId} from './config';



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            roomId:null,
            messages : [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendingMessage = this.sendingMessage.bind(this);
        this.getJoinableRooms = this.getJoinableRooms.bind(this);
        this.subscribeToRoom = this.subscribeToRoom.bind(this);
    }
    componentDidMount(){
        const tokenProvider = new Chatkit.TokenProvider({
            url: tokenUrl
          });
          const chatManager = new Chatkit.ChatManager({
              instanceLocator: instanceLocator,
              userId: userId,
              tokenProvider: tokenProvider
            });
            chatManager
            .connect()
              .then(currentUser => {
                //define currentUser
                this.currentUser = currentUser;

                this.getJoinableRooms();
              })
              .catch(error => {
                console.error("error:", error);
              })
    }
    getJoinableRooms(){
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
    }

    //send message to room ID
    subscribeToRoom(roomId){
        this.setState({messages:[]});
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
              onNewMessage: message => {
                this.setState({
                  messages:[...this.state.messages,message]
                })
              }
            }
          }).then(room=>{
              this.setState({roomId:room.id});
              this.getJoinableRooms();
          });
    }

    //this is message send to room
    sendingMessage(text){
        this.currentUser.sendMessage({
            text: text,
            roomId:this.state.roomId
          })
    }
    render(){
        return(
            <div>
                <RoomList subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
                <ListMessage messages={this.state.messages}/>
                <NewRoomFrom />
                <SendMessageForm sendingMessage={this.sendingMessage} />
            </div>
        )
    }
}

export default App;
