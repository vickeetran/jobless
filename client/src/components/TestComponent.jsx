import React from 'react';

const dummyJob = {
  title: 'ninja',
  company: 'fire nation',
  description: 'bake pizzas',
  userId: 1
}

const dummyUser = {
  firstName: 'hey',
  lastName: 'bro',
  email: 'example@example.com'
}

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.user = props.user;
    this.job = props.job;
    this.jobList = props.jobList
    this.methods = props.methods;
  }

  componentDidMount() {
    //UNCOMMENT THESE TO TEST
    //this.methods.getJob(17);
    //this.methods.getUser();
    //this.methods.postUser(dummyUser);
    //this.methods.postJob(dummyJob);
    this.methods.getJobList();

  }

  componentWillReceiveProps(nextProps) {
    this.jobList = nextProps.jobList;
    this.job = nextProps.job;
    this.user = nextProps.user;
    this.render();
  }

  render() {
    return (
      <div>
        <div>User: {JSON.stringify(this.user)}</div>
        <div>Job: {JSON.stringify(this.job)}</div>
        <div>JobList: {JSON.stringify(this.jobList)}</div>
      </div>
    )
  }
}

export default TestComponent;


