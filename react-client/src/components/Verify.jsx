import React from 'react';

class Verify extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verificationCode: ''
    }

    this.onChange = this.onChange.bind(this);
    this.verify = this.verify.bind(this);

  }

  onChange(e) {
    this.setState({
      verificationCode: e.target.value
    });
  }

  verify() {
    this.props.onVerify(this.state.verificationCode);

  }

  render () {
    return (<div>
      <h4> A verification code was sent to your number. Enter your code below:</h4>
      <input value={this.state.verificationCode} onChange={this.onChange}></input>
      <button onClick={this.verify}>Verify</button>
    </div>)
  }
}


export default Verify;