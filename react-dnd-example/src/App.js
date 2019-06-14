import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import ItemList from './itemlist';
import DTarget from './droptarget'
import Target from './Target';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1', image:'https://www.ixxxi-ringgenerator.com/api/images/R02501-03.jpg' },
      { id: 2, name: 'Item 2' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02515-03.jpg'},
      { id: 3, name: 'Item 3',image:' https://www.ixxxi-ringgenerator.com/api/images/R02516-09.jpg '},
      { id: 4, name: 'Item 4' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02520-03.jpg' },
    ],
    items1: [
      { id: 1, name: 'Item 1', image:'https://www.ixxxi-ringgenerator.com/api/images/R02501-03.jpg' },
      { id: 2, name: 'Item 2' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02515-03.jpg'},
      { id: 3, name: 'Item 3',image:' https://www.ixxxi-ringgenerator.com/api/images/R02516-09.jpg '},
      { id: 4, name: 'Item 4' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02520-03.jpg' },
    ],
    cards: [


      { id: 1, name: 'Item 1', image:'https://www.ixxxi-ringgenerator.com/api/images/R02501-03.jpg' },
      { id: 2, name: 'Item 2' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02515-03.jpg'},
      { id: 3, name: 'Item 3',image:' https://www.ixxxi-ringgenerator.com/api/images/R02516-09.jpg '},
      { id: 4, name: 'Item 4' ,image:'https://www.ixxxi-ringgenerator.com/api/images/R02520-03.jpg' },
     
    ],
    place:false
  }

  deleteItem = id => {
    console.log('0')
    this.setState(prevState => {
      return {
        
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }
 

  placeItem = (id) => {
    console.log(id,'pop')
    // debugger
   
    this.setState(prevState => {
      return {
        list:id,
        place: true
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 >Sample App</h1>
        </header>
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item key={item.id}  item={item}  handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>

            <Target place={this.state.place} />
          </div>
          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.image}
                moveCard={this.moveCard}
              />
            ))}
          </div>

          
        </div>


        {/* <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items1.map((item, index) => (
                <ItemList key={item.id}  item={item} placeItem ={this.placeItem}  />
              ))}
            </div>

            <DTarget place={this.state.place} list={this.state.list} />
          </div>   
        </div> */}
        
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
