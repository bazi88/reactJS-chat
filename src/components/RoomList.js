import React from "react";
import ReactDOM from 'react-dom';

class RoomList extends React.Component{
    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
    }
    render(){
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
        return(
            <div className="room-list">
                <h3>Yours Room</h3>
                <div>
                    {orderedRooms.map((nameRoom,index)=>{
                        return(
                            <div className="list-room" key={index}>
                                <a onClick={()=>{this.props.subscribeToRoom(nameRoom.id)}} href="#">{nameRoom.name}</a>
                            </div>
                        )
                    })};
                </div>
            </div>
        )
    }
}

export default RoomList;
