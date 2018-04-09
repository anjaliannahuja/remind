import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'margin-left': '15px',
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
      <Header size='medium' style={text}> Enter your 10-digit Phone Number to Register: </Header>
      <Input icon='phone' iconPosition='left' style={input} placeholder='xxx-xxx-xxxx' value={this.state.phoneNumber} onChange={this.onChange}></Input>
      <Button style={button} inverted color='black' onClick={this.register}>Register</Button>
    </div>)
  }
}


export default Register;