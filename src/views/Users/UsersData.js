import React, { Component } from 'react';
import axios from 'axios';

window.onload = function() {
  axios.get("https://randomuser.me/api/?gender=male&nat=uss&results=10")
  .then(response => {
    // this.setState({results: response.data.results}, (state) => {
      console.log(response)
      usersData = response.data.results;
    // })
  })
};

//  getPerson = () => {
//   axios.get("https://randomuser.me/api/?gender=male&nat=uss&results=10")
//   .then(response => {
//     // this.setState({results: response.data.results}, (state) => {
//       console.log(this.state)
//     // })
//   })
// };

// this.props.state.results.map((result, i) => 
//    key={i} style={{border: '3px solid', paddingTop:"15px", margin:"10px"}}>
  
//    {result.name.first} {result.name.last}
//    <IconBox props={this.props}/>;
var usersData = [];


export default usersData ;
