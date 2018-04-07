import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Register from './components/Register.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.registerPhoneNumber = this.registerPhoneNumber.bind(this);

    this.state = {
      clicked: false
    }
  }
  componentDidMount() {

  }

  registerPhoneNumber (phoneNumber) {
    axios.post('/register', {
      phoneNumber: phoneNumber
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  verifyPhoneNumber (verificationCode) {
    axios.post('/verify', {
      userVerifyCode: verificationCode
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  render () {
    return (<div>
      <h1>Remind Me</h1>
      {this.state.clicked ? <div>Hello World</div> : <div>Goodbye</div>}
      <Register onRegister={this.registerPhoneNumber}/>
      {}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));