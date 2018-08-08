import React, { Component } from 'react';
import Users from '../Users/Users';
import Pbz from '../Users/Pbz';
import {
  Row,
} from 'reactstrap';



// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}




class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }


  render() {

    return (
      <div className="animated fadeIn text-center">
       
        <Row >
        <Users />
        <span style={{padding:'25px'}}>VS</span>
        <Pbz />
         
        </Row>
      </div>
    );
  }
}

export default Dashboard;
