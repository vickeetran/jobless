import React from 'react';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.user = props.user;
    // this.job = props.job;
    // this.jobList = props.
  }

  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user;
    this.render();
  }

  render() {
    return (
      <div>
        <div>User: {JSON.stringify(this.user)}</div>
      </div>
    )
  }
}

export default TestComponent;


