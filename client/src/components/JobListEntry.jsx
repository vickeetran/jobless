import React from 'react';
import { Link } from 'react-router';

export default class JobListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props;
    this.companyName = JSON.stringify(this.data["data"]["company"]).slice(1,-1);
    this.title = JSON.stringify(this.data["data"]["title"]).slice(1,-1);
    this.jobId = JSON.stringify(this.data["data"]["id"]);
    console.log('THIS IS JOBID', this.jobId);
  }

  render() {
    const link = `/jobView?id=${this.jobId}`;
    return (
      <div>
        <li>
          <Link to={link}>
        
          <a className="menu-box-tab">
            <span className="icon scnd-font-color"></span>
              {this.companyName} {"("}{this.title} {")"}
          </a>
          </Link>                          
        </li>
      </div>
    );
  }
}
