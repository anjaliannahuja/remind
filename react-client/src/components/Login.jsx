import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'padding-left': '15px',
  'padding-bottom': '15px',
  'width': '250px'
}

const button = {
  'margin-left': '15px'
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
      password: ''
    }

    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.login = this.login.bind(this);

  }

  onPhoneChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  login() {
    this.props.onLogin(this.state.phoneNumber, this.state.password);
  }

  render () {
    return (<div>
      <Header size='medium' style={text}> Enter your Phone Number and Password: </Header>
      <Input style={input} placeholder='Enter Phone Number Here' value={this.state.phoneNumber} onChange={this.onPhoneChange}></Input>      
      <Input type='password' style={input} placeholder='Enter Password Here' value={this.state.password} onChange={this.onPasswordChange}></Input>
      <Button style={button} inverted color='black' onClick={this.login}>Login</Button>
    </div>)
  }
}


export default Login;