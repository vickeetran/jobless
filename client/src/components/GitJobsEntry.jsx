import React from 'react';


export default class GitJobsEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <a className="menu-box-tab">
            <span className="icon scnd-font-color"></span>
              {this.props.data.company} {"("}{this.props.data.jobTitle} {")"}
          </a>
        </li>
      </div>
    );
  }
}