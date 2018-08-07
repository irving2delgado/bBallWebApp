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
        <th scope="row"><a href={userLink}>{user.name.first}</a></th>
        <td><a href={userLink}>{user.name.last}</a></td>
        <td>{user.registered.age}</td>
        <td>{user.gender}</td>
        {/* <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td> */}
        <Progress className="progress-s" color="info" value="34" text="offense"/>
        <Progress className="progress-s" color="danger" value="78" />
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
      <div className="animated fadeIn">
        <Row>
        <Card>
              <CardHeader className="text-center">
                BlueBerry Muffin Wasps {' Vs '} PowerBAll Z Ninjas
              </CardHeader>
              <CardBody>
              <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        Offense
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Defense
                      </small>
                    </div>
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Monday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-m" color="info" value="34" text="offense"/>
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Tuesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Wednesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Thursday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Friday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Saturday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Sunday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    
                  
              </CardBody>
            </Card>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>Blueberry Muffin Wasps vs Spicy Hot Ninjas <small className="text-muted">example</small>
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

        </Row>
      </div>
    )
  }
}

export default Users;
