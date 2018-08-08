import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';
import User from './User'
import {
  Button,
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

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`
  const playerName = user.name.first
  const playerLast = user.name.last

  return (
    
    <tr key={user.id.toString()}>
        <td scope="row"><a style={{color:"inherit"}} href={userLink}>{playerName.charAt(0).toUpperCase() + playerName.substr(1)}</a></td>
        <td><a style={{color:"inherit"}} href={userLink}>{playerLast.charAt(0).toUpperCase() + playerLast.substr(1)}</a></td>
        <td>{user.registered.age}</td>
        <td>{user.gender}</td>
        {/* <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td> */}
        <Progress className="progress-s" color="info" value="34" text="offense"/>
        <Progress className="progress-s" color="danger" value="78" />
    </tr>
    
  )
}



class Pbz extends Component {
  constructor (props) {
    super(props);
    this.state = {
      results: []
    }
  }
   componentDidMount () {
     this.getData();
    };

    getData (){
      axios.get("https://randomuser.me/api/?gender=male&nat=us&results=12")
      .then(response => {
        // this.setState({results: response.data.results}, (state) => {
          console.log(response)
          this.setState({results: response.data.results});
        // })
      })
    }
    

  render() {
    
    
    const userList = this.props.results;

    // const userList = usersData.filter((user) => user.id < 19)

    return (
      <Col className="animated fadeIn">
       
         
            <Card body inverse color="success">
              <CardHeader>
                <i className="fa fa-align-justify"></i>PowerBall Z Ninjas <small className="text-muted">Roster</small>
              </CardHeader>
              <CardBody>
                <small className="float-right">
                  <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                    Offense
                  &nbsp;
                  <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                   Defense
                </small>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">First:</th>
                      <th scope="col">Last:</th>
                      <th scope="col">Postition:</th>
                      <th scope="col">Overall:</th>
                      <th scope="col">Stats:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
                
              </CardBody>
            </Card>
          
      </Col>
    )
  }
}

export default Pbz;
