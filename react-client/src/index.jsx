import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Register from './components/Register.jsx';
import Verify from './components/Verify.jsx';
import Schedule from './components/Schedule.jsx';
import CreatePassword from './components/CreatePassword.jsx';
import Login from './components/Login.jsx';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const title = {
  'padding': '15px',
  'fontFamily': 'Trebuchet MS, Helvetica, sans-serif',
  'color':'white'
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.registerPhoneNumber = this.registerPhoneNumber.bind(this);
    this.verifyPhoneNumber = this.verifyPhoneNumber.bind(this);
    this.scheduleReminder = this.scheduleReminder.bind(this);
    this.createPassword = this.createPassword.bind(this);
    this.login = this.login.bind(this);
    this.setLoginActive = this.setLoginActive.bind(this);
    this.setRegisterActive = this.setRegisterActive.bind(this);
    this.setScheduleActive = this.setScheduleActive.bind(this);
    this.setLogoutActive = this.setLogoutActive.bind(this);

    this.state = {
      pageCount: 1,
      activeItem: 'register',
      loggedIn: false
    }
  }

  setLoginActive (e) {
    this.setState({ 
      pageCount: 1,
      activeItem: 'login' 
    });
  }

  setRegisterActive (e) {
    this.setState({ 
      pageCount: 1,
      activeItem: 'register' 
    });
  }

  setScheduleActive (e) {
    this.setState({ 
      pageCount: 4,
      activeItem: 'schedule' 
    });
  }

  setLogoutActive (e) {
    this.setState({ 
      pageCount: 1,
      activeItem: 'logout',
      loggedIn: false
    });
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
    .catch(err => {
      console.log(err);
    });
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

  createPassword (password) {
    axios.post('/createPassword', {
      password: password
    })
    .then(response => {
      console.log(response);
      this.setState({
        pageCount: 4,
        loggedIn: true
      })
    })
    .catch(err => console.log(err));
  }

  login (phoneNumber, password) {
    axios.post('/login', {
      phoneNumber: phoneNumber,
      password: password
    })
    .then(response => {
      console.log('Logged in');
      this.setState({
        pageCount: 4,
        loggedIn: true
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
        pageCount: 5,
        activeItem: ''
      })
    })
    .catch(err => console.log(err));
  }


  render () {
    let pageNav;

    if (this.state.pageCount === 1 && this.state.activeItem === 'register') {
      pageNav = <Register onRegister={this.registerPhoneNumber} />
    } else if (this.state.pageCount === 1 && this.state.activeItem === 'login') {
      pageNav = <Login onLogin={this.login} />
    }else if (this.state.pageCount === 2) {
      pageNav = <Verify onVerify={this.verifyPhoneNumber} />
    } else if (this.state.pageCount === 3) {
      pageNav = <CreatePassword onCreatePassword={this.createPassword} />
    } else if (this.state.pageCount === 4 || this.state.activeItem === 'schedule') {
      pageNav = <Schedule onSchedule={this.scheduleReminder} />
    } else if (this.state.pageCount === 5) {
      pageNav = <Header size="medium" style={title}>Thank you for scheduling a reminder!</Header>
    } else if (this.state.activeItem === 'logout') {
      pageNav = <Header size="medium" style={title}>You are now logged out</Header>
    }
    

    return (<div>
      <Header size="large" style={title}><Icon name='comment outline' />Remind</Header>
      <Menu>
        {(!this.state.loggedIn ? 
        <Menu.Item
          name='login'
          active={this.state.activeItem === 'login'}
          onClick={this.setLoginActive}
        >
          Login
        </Menu.Item> : 
        <Menu.Item
          name='schedule'
          active={this.state.activeItem === 'schedule'}
          onClick={this.setScheduleActive}
        >
          Schedule Reminder
        </Menu.Item>)}
        {(!this.state.loggedIn ? 
        <Menu.Item
          name='Register'
          active={this.state.activeItem === 'register'}
          onClick={this.setRegisterActive}
        > 
          Register
        </Menu.Item> : 
        <Menu.Item
          name='Logout'
          active={this.state.activeItem === 'logout'}
          onClick={this.setLogoutActive}
        >
          Logout
        </Menu.Item> )}
      </Menu>
      {pageNav}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));