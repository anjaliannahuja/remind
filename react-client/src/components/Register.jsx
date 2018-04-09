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

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: ''
    }

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);

  }

  onChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  register() {
    this.props.onRegister(this.state.phoneNumber);

  }

  render () {
    return (<div>
      <Header size='medium' style={text}> Enter your Phone Number to Register: </Header>
      <Input style={input} placeholder='Enter Phone Number Here...' value={this.state.phoneNumber} onChange={this.onChange}></Input>
      <Button style={button} inverted color='black' onClick={this.register}>Register</Button>
    </div>)
  }
}


export default Register;