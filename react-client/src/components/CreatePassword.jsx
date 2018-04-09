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
      <Header size='medium' style={text}> Enter a Password to login next time: </Header>
      <Input style={input} placeholder='Enter Password Here' value={this.state.password} onChange={this.onChange}></Input>
      <Button style={button} inverted color='black' onClick={this.createPassword}>Create</Button>
    </div>)
  }
}


export default CreatePassword;