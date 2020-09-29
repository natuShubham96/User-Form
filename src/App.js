import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserForm from './Components/form';

export default class App extends Component {
  render() {
    return (
      <div>
<UserForm {...this.props}/>
  <div style={{marginTop:20,marginLeft:20}}>
  <Link to="/AboutUs" className="aboutUsLink"><h3>About Us</h3></Link>
  </div>
  </div>
    )
  }
}