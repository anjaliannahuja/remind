import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

const text = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

const input = {
  'width': '250px'
}

class CreatePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.createPassword = this.createPassword.bind(this);

  }

  onChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  createPassword() {
    this.props.onCreatePassword(this.state.password);
  }

  render () {
    return (<div>
      <Container style={text}>
        Create a password:<br/><br/>
        <Input icon='lock' iconPosition='left' type='password' style={input} placeholder='Password' value={this.state.password} onChange={this.onChange}></Input><br/><br/>
        <Button inverted color='black' onClick={this.createPassword}>Create</Button>
      </Container> 
    </div>)
  }
}


export default CreatePassword;