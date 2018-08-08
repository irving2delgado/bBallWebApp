import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class DefaultHeader extends Component {
 
  render() {

    // eslint-disable-next-line

    return (
      <React.Fragment>
        
        <Nav className="d-md-down-none" style={{margin:"auto"}} navbar>
          <NavItem className="px-3">
            <NavLink href="/" >New Matchup</NavLink>
          </NavItem>
        </Nav>
        
      </React.Fragment>
    );
  }
}

export default DefaultHeader;
