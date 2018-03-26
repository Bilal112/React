import React, { Component, } from 'react';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import firebase from './firebase'

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
const style = {
    margin: 12,
  };
export default class buy extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            clickedUser: "",
            uid: ''
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(u =>  {
           this.setState({ name: u.displayName })
            console.log(u.displayName)
        })

    }

   
    render() {
        return (
            <div>

                <AppBar
                    title="DashBoard"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<div className="displayname"> {this.state.name}
                        <FlatButton label="LogOut" onClick={() => { firebase.auth().signOut(); this.props.history.push('/') }} /></div>}
                />
              

           <span>  <Link to='./donate'>  <RaisedButton label="Donate" Donate={true} style={style}  /></Link>
          <Link to='./buy'> <RaisedButton label="Buy" disabled={true} style={style} /></Link>
            </span>

<div>
            <h1> Find Donar </h1>
    </div>
            </div>
        )
    }
}