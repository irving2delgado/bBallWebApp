import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import axios from 'axios';
import UserPbz from './UserPbz';
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

class Pbz extends Component {
  constructor (props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  
   componentDidMount () {
     this.getData();
    };

    getData (){
      axios.get("https://randomuser.me/api/?gender=male&nat=us&results=12")
      .then(response => {
          this.setState({results: response.data.results});
       
      })
    }
    

  render() {
    return (
      <Col className="animated fadeIn">
          
            <Card body inverse color="success">
              <CardHeader>
                <i className="fa fa-basketball"></i>PowerBall Z Ninjas <small className="text-muted">Roster</small>
              </CardHeader>
              <CardBody>
                <small className="float-right">
                  <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                    Offense
                  &nbsp;
                  <sup className="px-1"><Badge pill color="warning">&nbsp;</Badge></sup>
                   Defense
                </small>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Name:</th>
                     
                      <th scope="col">Age:</th>
                      <th scope="col">Rating:</th>
                      <th scope="col">Stats:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((user, index) =>
                      <UserPbz key={index} user={user} id={index} />
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