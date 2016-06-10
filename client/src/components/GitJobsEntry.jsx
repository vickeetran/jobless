import React from 'react';


export default class GitJobsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.addToDB = this.addToDB.bind(this);
  }

  addToDB() {
    this.props.methods.postJob({
      title: this.props.data.jobTitle,
      company: this.props.data.company,
      description: this.props.data.description,
      location: this.props.data.location,
      jobURL: this.props.data.howToApply,
      complete: false,
      apply: false
    });
  }
  
  render() {
    return (
      <div>
        <li>
          <a className="menu-box-tab" onClick={this.addToDB}>
            <span className="icon scnd-font-color"></span>
              {this.props.data.company} {"("}{this.props.data.jobTitle} {")"}
              {" Location: "} {this.props.data.location}
          </a>
        </li>
      </div>
    );
  }
}

