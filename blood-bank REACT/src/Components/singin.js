import React, { Component, } from 'react';
 import { BrowserRouter as Link} from 'react-router-dom'
import firebase from './firebase'
import logo3 from './Image/logo3.jpg'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
 
const style = {
  margin: 12,
};

class signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  SignIn() {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user)=>{alert('Looged In '); console.log(user);
    localStorage.setItem('user',user.uid);this.props.history.push('/home')})
    .catch((ev)=>{alert(ev.message)})

  }
  render() {
    return (
      <div>
        < img src={logo3} alt="Blood Bank" className="logo" />  <br />

        <TextField
          hintText="bilalirfan000@gmail.com"
          floatingLabelText="Enter your Email"
          floatingLabelFixed={true} onChange={ev=> {
            this.setState({email: ev.target.value})
          }} />
        <br />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelFixed={true} onChange={ev=> {this.setState({password: ev.target.value})}} />
        <br />
        <Link to='./singup'>
          <RaisedButton label="Singup" primary={true}  style={style} />
        </Link>

          <RaisedButton label="Login" primary={true} style={style} onClick={this.SignIn.bind(this)} />
      </div>
    )
  }


}


export default signin;