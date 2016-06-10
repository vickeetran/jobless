import React from 'react';
import JobListEntry from './JobListEntry.jsx';

export default class JobList extends React.Component {
  constructor(props) {
    super(props);

    this.jobs = [];
    // this.state = {
    //   jobs: []
    // }
  }

  componentDidMount() {
    console.log(this.props);
    this.jobs = this.props.jobs
  }

  componentWillReceiveProps() {
    console.log(this.props.jobs);
    this.jobs = this.props.jobs
    // this.setState({
      // jobs: this.props.jobs
    // })
  }

  render() {
    return (
      <table className="jobPosting">
        <thead className="days-week">
            <tr>
                <th>Company</th>
                <th>Job Posting</th>
            </tr>
        </thead>
        <tbody>
          {
            this.jobs.map( job => {
              return <JobListEntry job={job} />   
            })
          }
           
        </tbody>
      </table>
    )
  }
}

