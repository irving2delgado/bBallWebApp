import React, { Component } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import {
    Progress,
  } from 'reactstrap';

class UserRow extends Component {
  constructor(props) {
    super(props);
    this.state ={
        popoverOpen: false,
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }
 

  render() {
      
  const user = this.props.user
  const userLink = `#/users/${user.id}`
  const playerName = user.name.first
  const playerLast = user.name.last

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shootingIn = getRandomInt(30,100);
const shootingOut = getRandomInt(30,100);
const handling = getRandomInt(30,100);
const passing = getRandomInt(30,100);
const steal = getRandomInt(30,100);
const block = getRandomInt(30,100);
const speed = getRandomInt(30,100);
const vert = getRandomInt(30,100);
const offense = (shootingIn + shootingOut + handling + passing) / 4;
const defense = (steal + block + speed + vert) / 4;
const overall = Math.round((offense + defense) / 2);
const age = getRandomInt(18, 40);


const divStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '10px',
    
  };
 
  


    return (
          <tr key={user.id.toString()}>
            <td scope="row" 
                style={{color:"inherit", cursor:"pointer"}} 
                id={'Popover-' + this.props.id} 
                onClick={this.toggle}>
                {playerName.charAt(0).toUpperCase() + playerName.substr(1)} {playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}
            </td>
            
              <Popover placement="right" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} >
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
              <td><Progress className="progress-s" color="info" value={offense} />
              <Progress className="progress-s" color="warning" value={defense} /></td>
              
          </tr>
          
        );
      };
   
  }


export default UserRow;