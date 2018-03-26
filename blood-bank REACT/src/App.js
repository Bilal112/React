import React, { Component, } from 'react';
import { Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import singin from './Components/singin'
import singup from './Components/singup';
import './Components/firebase'
import Home from './Components/home'
import buy from './Components/buy'
import userdata from'./Components/userdata'
import donate2 from './Components/donate2'


const Root =()=>(
  <Router>
  <div>
   <Route exact path="/" component={singin} />
   <Route  path='/singup' component ={singup}/>
   <Route path="/home" component={Home} />
  
   <Route path="/buy" component={buy} />
   <Route path='/userdata' component={userdata}/>    
  <Route path='/donate2' component={donate2}/>
  </div>
</Router>
)
class App extends Component {
  
 
  render()  {
    return (
      <div className="App">
        <Root />
  {/* <h1>  What do want</h1> */}
      
      </div>
    );

  }
}


export default App;