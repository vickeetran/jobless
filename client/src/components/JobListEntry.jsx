import React from 'react';

export default class JobListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props;
    this.companyName = JSON.stringify(this.data["data"]["company"]).slice(1,-1);
    this.title = JSON.stringify(this.data["data"]["title"]).slice(1,-1);
  }

  render() {
    return (
      <div>
        <li>
          <a className="menu-box-tab" href="#">
            <span className="icon scnd-font-color"></span>
              {this.companyName} {"("}{this.title} {")"}
          </a>                            
        </li>
      </div>
    );
  }
}
