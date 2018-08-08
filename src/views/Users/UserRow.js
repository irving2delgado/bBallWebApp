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

    return (
          <tr key={user.id.toString()}>
            <td scope="row" tyle={{color:"inherit"}} 
                id={'Popover-' + this.props.id} onClick={this.toggle}>
                {playerName.charAt(0).toUpperCase() + playerName.substr(1)}
            </td>
            <td>
                <a 
                style={{color:"inherit"}} 
                 onClick={this.props.toggle}>
                 {playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}</a>
            </td>
              <Popover placement="top" isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} >
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
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