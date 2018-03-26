import React, { Component, } from 'react';
import {} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import firebase from './firebase';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

const styles={
    margin: 10
}


const style={
    margin:12
}

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            clickedUser: "",
            uid: '',
            dataArray:[],
            name2:'',
            value:''

        }
       
    }
grp(){
   
    console.log(localStorage.key)
}
    componentDidMount() {
        firebase.auth().onAuthStateChanged(u => {
            this.setState({ name: u.displayName })
          //  console.log(u.displayName)
        })
        firebase.database().ref("Donar/").on("value", (snapshot) => {
            let data = snapshot.val();
            this.setState({dataArray: Object.values(data)})

          console.log(data)
        })

    }
search(){
   var val=this.state.value
    firebase.database().ref('/Donar').on('value',(snap)=>{
        let bloodGroup =[]
        let data= snap.val()
        for(let i in data){
            if(val==='A+'){
if (data[i].bloodgroup==="A+"||data[i].bloodgroup==='AB+'){
bloodGroup.push(data[i])
this.setState({
    dataArray:bloodGroup
})
}
            

            }
            if(val==='B+'){   
if (data[i].bloodgroup==='B+'||data[i].bloodgroup==='AB+'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }
            
            if(val==='B-'){
if (data[i].bloodgroup==='B-'||data[i].bloodgroup==='B+'||data[i].bloodgroup==='AB+'||data[i].bloodgroup==='AB-'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }
            if(val==='A-'){
if (data[i].bloodgroup==='A-'||data[i].bloodgroup==='A+'||data[i].bloodgroup==='AB+'||data[i].bloodgroup==='AB-'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }
            if(val==='O-'){
if (data[i].bloodgroup==='O-'||data[i].bloodgroup==='O+'||data[i].bloodgroup==='AB+'||data[i].bloodgroup==='AB-'||data[i].bloodgroup==='B-'||data[i].bloodgroup==='B+'||data[i].bloodgroup==='A+'|data[i].bloodgroup==='A-'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }
            if(val==='O+'){
if (data[i].bloodgroup==='O+'||data[i].bloodgroup==='A+'||data[i].bloodgroup==='B+'||data[i].bloodgroup==='AB+'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }
            if(val==='A+'){
if (data[i].bloodgroup==='A+'||data[i].bloodgroup==='AB+'){
    bloodGroup.push(data[i])
    this.setState({
        dataArray:bloodGroup
    })
}
            }










        }
    })
}
handleChange = (event, index, value) => this.setState({value});

    render() {
                                      
        return (
            <div>
                <AppBar
                    title="DashBoard"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<div className='todo' >  <RaisedButton disabled={true}  label={this.state.name} /> { " " } { " " } { " " } { " " }
                   <RaisedButton   label="Donate"  onClick={()=>{
                       this.props.history.push('/donate2')
                   }} /> { " " } { " " } { " " } { " " }  
                        <RaisedButton label="LogOut"  styles={styles} onClick={() => { firebase.auth().signOut(); this.props.history.push('/') }} /></div>}
            
                />
              

             <SelectField
         floatingLabelText="Blood Donate"
  value={this.state.value}
           onChange={this.handleChange.bind(this)}
        >
        <MenuItem values={1} primaryText="Blood Group" />
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
        <RaisedButton label="Search" primary={true} style={style} onClick={this.search.bind(this)} />
        <br />
        <br />
        <br />        
                    <div >{this.state.dataArray.map((val,ind)=>{return(
<div className='card'>

<Card>

<CardHeader
     
      
    />

    <CardMedia
      overlay={<CardTitle title={val.name1} subtitle={val.bloodgroup} />}
    >
    </CardMedia>
    <CardActions>
    <RaisedButton label='Seemore'onClick={e=>{
        console.log(val)
         this.props.history.push("userdata")
         localStorage.setItem("key", val.uids)
   
         
    }}/>

    </CardActions>
    </Card>

    </div>
                    )
                  

                
                
            
            })}
             
        </div>
         

<div>


    </div>
            </div>
        )
    }
}