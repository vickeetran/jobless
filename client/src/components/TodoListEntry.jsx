import React from 'react';

export default class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props;
    this.companyName = JSON.stringify(this.data["data"]["company"]).slice(1,-1);
    this.description = JSON.stringify(this.data["data"]["description"]).slice(1,-1);
    this.interviewer = JSON.stringify(this.data["data"]["interviewers"]).slice(1,-1);
    console.log('ths is interviewer', this.interviewer);
  }

  render() {
    return (
      <div>
        <li>
          <a className="menu-box-tab" href="#">
            <span className="icon scnd-font-color"></span>
              {this.description} {"w/"} {this.interviewer} {"("}{this.companyName} {")"}
          </a>                            
        </li>
      </div>
    );
  }
}
