import React, { Component } from 'react';
import Users from '../Users/Users';
import Pbz from '../Users/Pbz';
import { AppNavbarBrand } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import lighthouse from '../../assets/img/lighthouse.png'

import {
  Row,
  Img
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
        <Row>
          Show lighthouse stats
          Coming soon push notifications
          <img src={lighthouse} />
        </Row>
        <Row >
        <Users />
        <span style={{padding:'25px'}}>Powered <br />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}/>
          <br />
          <br />
          <strong style={{marginTop:"55px"}}> VS </strong> <br /> <br />
          <small>* Click on Players to shuffle stats</small>
         </span>
         
        <Pbz />
         
        </Row>
      </div>
    );
  }
}

export default Dashboard;
