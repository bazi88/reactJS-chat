import React from "react";

import Message from './src/components/Message';
import ListMessage from './src/components/ListMessage';
import NewRoomFrom from './src/components/NewRoomFrom';
import RoomList from './src/components/RoomList';
import SendMessageForm from './src/components/SendMessageForm';

class App extends React.Component{
    render(){
        return(
            <div>
                <RoomList />
                <ListMessage />
                <NewRoomFrom />
                <SendMessageForm />
            </div>
        )
    }
}

export default App;
