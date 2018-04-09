import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Register from './components/Register.jsx';
import Verify from './components/Verify.jsx';
import Schedule from './components/Schedule.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.registerPhoneNumber = this.registerPhoneNumber.bind(this);
    this.verifyPhoneNumber = this.verifyPhoneNumber.bind(this);
    this.scheduleReminder = this.scheduleReminder.bind(this);

    this.state = {
      pageCount: 1
    }
  }
  componentDidMount() {
    
  }

  registerPhoneNumber (phoneNumber) {
    axios.post('/register', {
      phoneNumber: phoneNumber
    })
    .then(response => {
      console.log(response);
      this.setState({
        pageCount: 2
      });
    })
    .catch(err => console.log(err));
  }

  verifyPhoneNumber (verificationCode) {
    axios.post('/verify', {
      userVerifyCode: verificationCode
    })
    .then(response => {
      console.log(response);
      this.setState({
        pageCount: 3
      })
    })
    .catch(err => console.log(err));
  }

  scheduleReminder (message, dateTime) {
    axios.post('/schedule', {
      messageText: message,
      scheduledTime: dateTime
    })
    .then(response => {
      console.log(response);
      this.setState({
        pageCount: 4
      })
    })
    .catch(err => console.log(err));
  }


  render () {
    let pageNav;

    if (this.state.pageCount === 1) {
      pageNav = <Register onRegister={this.registerPhoneNumber} />
    } else if (this.state.pageCount === 2) {
      pageNav = <Verify onVerify={this.verifyPhoneNumber} />
    } else if (this.state.pageCount === 3) {
      pageNav = <Schedule onSchedule={this.scheduleReminder} />
    } else {
      pageNav = <h4>Thank you for scheduling a reminder!</h4> <button >Send Another Reminder</button>
    }

    return (<div>
      <h1>Remind Me</h1>
      {pageNav}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));