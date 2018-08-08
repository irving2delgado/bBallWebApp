import React, { Component } from 'react';
import {  Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import {
    Progress,
  } from 'reactstrap';

class UserPbz extends Component {
  constructor(props) {
    super(props);
    this.state ={
        popoverOpen: false,
    }
    this.toggle = this.toggle.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

  render() {
      
  const user = this.props.user
  const playerName = user.name.first
  const playerLast = user.name.last
const shootingIn = this.getRandomInt(30,100);
const shootingOut = this.getRandomInt(30,100);
const handling = this.getRandomInt(30,100);
const passing = this.getRandomInt(30,100);
const steal = this.getRandomInt(30,100);
const block = this.getRandomInt(30,100);
const speed = this.getRandomInt(30,100);
const vert = this.getRandomInt(30,100);
const offense = (shootingIn + shootingOut + handling + passing) / 4;
const defense = (steal + block + speed + vert) / 4;
const overall = Math.round((offense + defense) / 2);
const age = this.getRandomInt(18, 40);


const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '10px',
    
  };
    return (
          <tr key={user.id.toString()}>
            <td scope="row" 
                style={{color:"inherit", cursor:"pointer"}} 
                id={'Popo-' + this.props.id} 
                onClick={this.toggle}>
                {playerName.charAt(0).toUpperCase() + playerName.substr(1)} {playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}
            </td>
            
              <Popover placement="right" isOpen={this.state.popoverOpen} target={'Popo-' + this.props.id} >
                <PopoverHeader>{playerName.charAt(0).toUpperCase() + playerName.substr(1)} {playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}</PopoverHeader>
                <PopoverBody>
                <div style={divStyle}>
               <ul style={{listStyleType:"none", fontSize:"15px", lineHeight:"25px", padding:"15px"}}>
                <h4>Skill</h4>
                <li>Inside: {shootingIn}</li>
                <li>Shooting: {shootingOut}</li>
                <li>Handling: {handling}</li>
                <li>Passing: {passing}</li>
                </ul>
                <ul style={{listStyleType:"none", fontSize:"15px", lineHeight:"25px", padding:"15px"}}>
                <h4>Physical</h4>
                <li>Steal: {steal}</li>
                <li>Block: {block}</li>
                <li>Speed: {speed}</li>
                <li>Vert: {vert}</li>
                </ul>
                </div>
                </PopoverBody>
                </Popover>
              <td>{age}</td>
              <td>{overall}</td>
              <td>
              <Progress className="progress-s" color="info" value={offense} />
              <Progress className="progress-s" color="warning" value={defense} />
              </td>
              
          </tr>
          
        );
      };
   
  }


export default UserPbz;