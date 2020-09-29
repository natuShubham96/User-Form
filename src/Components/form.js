import React, {Component} from 'react';
import {Form, FormControl,FormGroup,FormLabel,Col,Row,ButtonGroup,Button} from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import {Link} from 'react-router-dom';

const Email_cookie_key = "EMAIL";   //Common cookie key, to be used by all cokkie functions
const Password_cookie_key = "PASSWORD";

export default class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      email : "",
      password: "",
      submitted: false,
      remember: false
    }
  }

  //Mounting the values stored inside the cookie
  componentDidMount() {
      let email = read_cookie(Email_cookie_key);  //reading the cookie with cookie_key as FORM
      let password = read_cookie(Password_cookie_key);
      this.setState({email, password});               //Initializing state with value received from cookie
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
       //Cookie is created and value is stored inside it
      }

      onPasswordChange = (event) => {
        this.setState({password: event.target.value});
      }
      onSubmit = () => {
        this.setState({submitted: true})
        this.props.history.push('/LogIn')
      }
      onReset = () => {
        this.setState({submitted: false, email: '', password: ''});
        delete_cookie(Email_cookie_key);
        delete_cookie(Password_cookie_key);
      }
      onRememberClick = () => {
        let remember = !this.state.remember;
        this.setState({remember},() => {
          this.state.remember && bake_cookie(Email_cookie_key,this.state.email);
          this.state.remember && bake_cookie(Password_cookie_key,this.state.password);
          !this.state.remember && delete_cookie(Email_cookie_key);
          !this.state.remember && delete_cookie(Password_cookie_key);
        });
      }

render() {
  return (
    <div style={{marginLeft: 20, marginTop:20}}>
   <Form>
     <FormGroup as={Row}>
       <FormLabel column>Email Here</FormLabel>
       <Col><FormControl type="email" value={this.state.email} placeholder="name@example.com" onChange={this.onEmailChange} className="emailForm"></FormControl></Col>
     </FormGroup>
     <FormGroup as={Row}>
       <FormLabel column>Password Here</FormLabel>
       <Col><FormControl type='password' value={this.state.password} onChange={this.onPasswordChange} placeholder= "password" className="password"></FormControl></Col>
     </FormGroup>
     <FormGroup as={Row}>
     <FormLabel column>Remember creds</FormLabel>
       <Col><FormControl type="checkbox" onClick={this.onRememberClick} label="Remember Creds" className="rememberCheckBox"></FormControl></Col>
     </FormGroup>
     <ButtonGroup as={Row}>
       <Col><Button onClick={this.onSubmit} className="submitButton">Submit</Button></Col>
       <Col><Button onClick={this.onReset} className="resetButton">Reset</Button></Col>
     </ButtonGroup>
   </Form>
    </div>
  )
}
}