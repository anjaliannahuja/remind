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

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      scheduledTime: ''
    }

    this.onMessageChange = this.onMessageChange.bind(this);
    this.onScheduledChange = this.onScheduledChange.bind(this);
    this.schedule = this.schedule.bind(this);

  }

  onMessageChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onScheduledChange(e) {
    this.setState({
      scheduledTime: e.target.value
    });
  }

  schedule() {
    this.props.onSchedule(this.state.message, this.state.scheduledTime);

  }

  render () {
    return (<div>
      <Header size='medium' style={text}> Schedule your reminder below: </Header>
      <Header size='tiny' style={text}>Reminder Message: </Header>
      <Input style={input} placeholder='Type reminder here' value={this.state.message} onChange={this.onMessageChange}></Input> <br/>
      <Header size='tiny' style={text}>Scheduled Day and Time: </Header>
      <Input style={input} value={this.state.scheduledTime} onChange={this.onScheduledChange} type="datetime-local"></Input> <br/> <br/>
      <Button inverted color='black' style={button} onClick={this.schedule}>Schedule</Button>
    </div>)
  }
}


export default Schedule;