import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class DTarget extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'red' : 'white';
    return connectDropTarget(

<div className="target" style={{display:'flex',background: backgroundColor }}>

       <h1 style={{textAlign:'center',color:'blue',justifyContent:'center',alignSelf:'center',flex:1}}> drag here for Delete</h1>
       
       
       </div>
       
    );
  }
}

export default DropTarget('item', {}, collect)(DTarget);
