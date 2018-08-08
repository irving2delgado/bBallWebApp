import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import {
   
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    CardFooter,
    CardTitle,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
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

const shootingIn = getRandomInt(20,70);
const shootingOut = getRandomInt(60,100);
const handling = getRandomInt(60,100);
const passing = getRandomInt(60,100);
const steal = getRandomInt(30,100);
const block = getRandomInt(20,70);
const speed = getRandomInt(60,100);
const strength = getRandomInt(35,85);
const vert = getRandomInt(100,60);

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
                <li>Steal: {shootingIn}</li>
                <li>Block: {shootingOut}</li>
                <li>Speed: {handling}</li>
                <li>Vert: {passing}</li>
                </ul>
                
            </div>
                </PopoverBody>
                </Popover>
              <td>{user.registered.age}</td>
              <td>{user.gender}</td>
              <Progress className="progress-s" color="info" value="34" text="offense"/>
              <Progress className="progress-s" color="warning" value="78" />
          </tr>
          
        );
      };
   
  }


export default UserRow;