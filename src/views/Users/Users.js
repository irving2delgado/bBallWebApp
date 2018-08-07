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

  // const getBadge = (status) => {
  //   return status === 'Active' ? 'success' :
  //     status === 'Inactive' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Banned' ? 'danger' :
  //           'primary'
  // }

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={userLink}>{user.cell}</a></th>
        <td><a href={userLink}>{user.name.first}</a></td>
        <td>{user.registered.age}</td>
        <td>{user.gender}</td>
        {/* <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td> */}
    </tr>
  )
}


class Users extends Component {
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
      axios.get("https://randomuser.me/api/?gender=male&nat=uss&results=10")
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
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
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
          
        </Row>
      </div>
    )
  }
}

export default Users;
