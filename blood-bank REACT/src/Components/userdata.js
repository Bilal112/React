import React, { Component, } from 'react';
import '../App';
import * as firebase from 'firebase'

     
export default class Userdata extends Component{
   constructor(){
       super()
       this.state={
           userdata:[]

       }
   }
   
   
    componentDidMount(){
   let uid= localStorage.getItem('key')
   console.log(uid)
    firebase.database().ref('Donar/'+uid).on('value',(snap)=>{
    let data = snap.val();
    this.setState({userdata: data})
    })
    }






render(){
    return(
        <div>  <p className='text-center'> User detail </p>
  
    <table className="text-center" border="1" cellspacing="0" cellpadding="10"   align='center'>
        <tr>
            <th colspan="3" width="250px">Name</th>
            <td width="250px" align="center"> {this.state.userdata.name1} </td>
        </tr>
        <tr>
            <th colspan="3" width="250px">Blood Group</th>
            <td width="250px" align="center">{this.state.userdata.bloodgroup}</td>
        </tr>
        <tr>
                <th colspan="3" width="250px">Email</th>
                <td width="250px" align="center">{this.state.userdata.Email}</td>
            </tr>
            <tr>
                    <th colspan="3" width="250px">Contact</th>
                    <td width="250px" align="center">{this.state.userdata.Contact}</td>
                </tr>
               
    </table>
        {console.log(this.state.userdata.name1)}
    </div>
    )
}
 }
 