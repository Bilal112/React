 import React, { Component, } from 'react';
import {Link} from 'react-router-dom'
 import AppBar from 'material-ui/AppBar';
 import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
 import SelectField from 'material-ui/SelectField';

import RaisedButton from 'material-ui/RaisedButton';
import firebase from'./firebase'
const styles={
    margin:12
}


export default class donate2 extends Component{
    constructor() {
  super()
  this.state={
      AllDonor:[],
      name: '',
      value:'',
          Fname: '',
           Email: '',
            Contact: '',
            bloodgroup: '',
            Adress: '',
  }
  
    }


  componentDidMount() {
 firebase.auth().onAuthStateChanged(u => {
            this.setState({ name: u.displayName })
            console.log(u.displayName)
        })
 
 
  }  
   
   
   
//       firebase.auth().onAuthStateChanged(u => {
//     firebase.database().ref('Donar/' + u.uid).once('value').then(a => {
           
//             })
//             this.setState({ name: u.displayName })
//             console.log(u.displayName)
//          })
//      firebase.database().ref('Donor/').on('value',(snap)=>{
//             let data = snap.val();
//              var AllDonor = Object.values(data);
//   }
  
// }
      handleChange = (event, index, value) => this.setState({value});
    Rigistered() {
        let uids = firebase.auth().currentUser.uid;
       
        firebase.database().ref('Donar/' + uids).set({
            name1: this.state.name1,
            Fname:this.state.Fname,
            Email: this.state.Email,
            bloodgroup: this.state.value,
            Contact: this.state.Contact,
            Adress: this.state.Adress,
uids:firebase.auth().currentUser.uid,
        })
this.props.history.push('/home')
    }
 render(){  
      return(


 <div> 
   <AppBar
                title="DashBoard"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                iconElementRight={<div className='todo' >    { " " } { " " } { " " }
                <RaisedButton  label={this.state.name} />    {''} {''} {''}
           <Link to='/home'   >  <RaisedButton   label="Home" /></Link> { " " } { " " } { " " } { " " }   
                    <RaisedButton label="LogOut"  styles={styles} onClick={() => { firebase.auth().signOut(); this.props.history.push('/') }} /></div>}
        
            />


    <div style={{
                     maxWidth: 500,
                    margin: '100px auto'
             }}>

 
                   <h1>  Donate Blood </h1>
                    <br />
                     <TextField
                         hintText="Bilal"
                      floatingLabelText='Name'
                       type="Name"
                       floatingLabelFixed={true}
                        onChange={(e) => { this.setState({ name1: e.target.value }) }} />
                    <br />          
                              <TextField
                        hintText="Father Name"
                        floatingLabelText='Father Name'         
                                        type="Name"
                       floatingLabelFixed={true}
                         onChange={(e) => { this.setState({ Fname: e.target.value }) }} />
                    <br />

                   <TextField
                        hintText="ContactNo."
                        floatingLabelText='Contact No.'
                        type="Number"
                        floatingLabelFixed={true}
                        onChange={(e) => { this.setState({ Contact: e.target.value }) }} />
                    <br /> 
                   <TextField
                        hintText="Adress."
                       floatingLabelText='Adress.'
                        type="Adress"
                       floatingLabelFixed={true}
                         onChange={(e) => { this.setState({ Adress: e.target.value }) }} />
                     <br />
                     <TextField
                        hintText="@gmail.com."
                       floatingLabelText='Email Adress.'
                         type="Email"
                         floatingLabelFixed={true}
                         onChange={(e) => { this.setState({ Email: e.target.value }) }} />

                   <br /> 
                   <SelectField
           floatingLabelText="Blood Donate"
          value={this.state.value}
           onChange={this.handleChange.bind(this)}
        >
        
         <MenuItem value={"A+"} primaryText="A+" />
           <MenuItem value={"O+"} primaryText="O+" />         
             <MenuItem value={"B+"} primaryText="B+" />
          <MenuItem value={"AB+"} primaryText="AB+" />
          <MenuItem value={"A-"} primaryText="A-" />
         <MenuItem value={"O-"} primaryText="O-" />
         <MenuItem value={"B-"} primaryText="B-" />
          <MenuItem value={"AB-"} primaryText="AB-" />
        </SelectField>
              
                 
        

                       <br />
      <RaisedButton label="Submit" primary={true} onClick={this.Rigistered.bind(this)} />


</div>
 
</div> 

 )
}
}