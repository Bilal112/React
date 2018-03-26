import React, { Component, } from 'react';
import logo3 from './Image/logo3.jpg';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from './firebase';

//import * as firebase from 'firebase';

const style = {
    margin: 12,
};
class Singup extends Component {
  ref= firebase.database().ref()
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
    
    }
    
  }
  sendData(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(()=>{
        firebase.auth().currentUser.updateProfile({
            displayName:this.state.name
        })
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('SignUp/'+uid).set({
            email : this.state.email,
            name : this.state.name,
            password : this.state.password,
  
          })
        alert("signup Done")
        this.setState({name:'',email:'',password:''})
      
        this.props.history.push("/")
    })
    .catch(ev=>{alert(ev.message)})
 
}  
  render() {
    return (
    
<div>
<img src={logo3} alt="Blood Bank" className="logo" />  <br />
<TextField
  hintText="Bilal"
  floatingLabelText='Name'
  type="Name"
  floatingLabelFixed={true} onChange={(e)=>{this.setState({name : e.target.value})}} />
  <br />

  <TextField
  hintText="Email Address"
  floatingLabelText='Email'
  type="Name"
  floatingLabelFixed={true} onChange={(e)=>{this.setState({email : e.target.value})}} />

  <br />
  <TextField
  hintText="Password"
  floatingLabelText='Password'
  type="password"
  floatingLabelFixed={true} onChange={(e)=>{this.setState({password : e.target.value})}} />
  <br/>

<RaisedButton label="Submit" primary={true} style={style} onClick={this.sendData.bind(this)} />

</div>
  )}
}
export default Singup;