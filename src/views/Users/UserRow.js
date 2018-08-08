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

  }

  

  render() {
      
  const user = this.props.user
  const userLink = `#/users/${user.id}`
  const playerName = user.name.first
  const playerLast = user.name.last

    return (
    //   <span>
    //     <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} onClick={this.toggle}>
    //       {this.props.item.text}
    //     </Button>
    //     <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
    //       <PopoverHeader>Popover Title</PopoverHeader>
    //       <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
    //     </Popover>
    //   </span>
     
     
          <tr key={user.id.toString()}>
            <td scope="row">
                <Button 
                style={{color:"inherit"}} 
                id={'Popover-' + this.props.id} 
                isOpen={this.props.popOpen}
                onClick={this.props.togglePop}>
                {playerName.charAt(0).toUpperCase() + playerName.substr(1)}</Button>
            </td>
            <td>
                <a 
                style={{color:"inherit"}} 
                 onClick={this.props.toggle}>
                 {playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}</a>
            </td>
              <Popover placement="top" isOpen={this.props.popoverOpen} target={'Popover-' + this.props.id} >
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