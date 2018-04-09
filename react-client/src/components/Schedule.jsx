import React from 'react';

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
      <h4> Schedule your reminder below: </h4>
      Message: <input value={this.state.message} onChange={this.onMessageChange}></input> <br/>
      Scheduled Day and Time: <input value={this.state.scheduledTime} onChange={this.onScheduledChange} type="datetime-local"></input> <br/> <br/>
      <button onClick={this.schedule}>Schedule</button>
    </div>)
  }
}


export default Schedule;