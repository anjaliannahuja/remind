import React from 'react';
// import ListItem from './ListItem.jsx';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: ''
    }

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);

  }

  componentDidMount() {

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
      <h4> Enter Your Phone Number to Register </h4>
      <input value={this.state.phoneNumber} onChange={this.onChange}></input>
      <button onClick={this.register}>Register</button>
    </div>)
  }
}


export default Register;