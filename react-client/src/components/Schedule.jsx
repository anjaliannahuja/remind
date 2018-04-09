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
      <Container style={text}>
        Reminder Message: <br/> <Input icon='comment' iconPosition='left' style={input} placeholder='Message' value={this.state.message} onChange={this.onMessageChange}></Input> <br/> <br/>
        Scheduled Day and Time: <br/><Input icon='calendar alternate' iconPosition='left' style={input} value={this.state.scheduledTime} onChange={this.onScheduledChange} type="datetime-local"></Input> <br/> <br/>
        <Button inverted color='black' onClick={this.schedule}>Schedule Reminder</Button>
      </Container>
    </div>)
  }
}


export default Schedule;