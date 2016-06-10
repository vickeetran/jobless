import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class JobListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.job = props.job;
    // this.data = this.props;
    // this.companyName = this.data["data"]["company"];
    // this.title = this.data["data"]["title"];
    // this.jobId = this.data["data"]["id"].toString();
    // console.log('THIS IS JOBID', this.jobId);
  }

  componentDidMount() {
    console.log(this.props)
  }

  goToJobView() {
    console.log('clicked!')
    browserHistory.push(`/jobView?id=${this.job.id}`);
  }

  render() {
    if (this.job.complete) {
      return (
        <tr className='tr-job complete' onClick={this.goToJobView.bind(this)}>
          <td className='td-company'>{this.job.company}</td>
          <td className='td-position'><a href={this.job.jobURL}>{this.job.title}</a></td>
        </tr>
      )
    } else {
      return (
        <tr className='tr-job' onClick={this.goToJobView.bind(this)}>
          <td className='td-company'>{this.job.company}</td>
          <td className='td-position'><a href={this.job.jobURL}>{this.job.title}</a></td>
        </tr>
      )
    }
  }
}
  
  
        // <li>
        //   <a className="menu-box-tab">
        //     <span className="icon scnd-font-color"></span>
        //       {this.companyName} {"("}{this.title} {")"}
        //   </a>
        // </li>