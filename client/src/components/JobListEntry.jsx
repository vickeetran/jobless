import React from 'react';
import { Link } from 'react-router';

export default class JobListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props;

    this.companyName = this.data["data"]["company"]
    this.title = this.data["data"]["title"]
    this.jobId = this.data["data"]["id"].toString();

    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    const link = `/jobView?id=${this.jobId}`;
    return (
      <div>
        <li>
          <Link to={link}>
          <jobView jobId={this.jobId} />
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
