import React from 'react';

export default class JobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return( 
      <div className="container job-list">
        <div className="row header">
          <div className="col-xs-4 vcenter">Company</div>
          <div className="col-md-4 hidden-xs vcenter">Status</div>
        </div>
        <div className="row listing">
          <div className="col-xs-4 vcenter company text-uppercase">FaceBook</div>
          <div className="col-xs-4 hidden-xs vcenter status">Not Started</div>
          <div className="col-xs-4 vcenter"><button className="btn btn-primary">View Application</button></div>
        </div>
        <div className="row listing">
          <div className="col-xs-4 vcenter company text-uppercase">Google</div>
          <div className="col-xs-4 hidden-xs vcenter status">In Progress</div>
          <div className="col-xs-4 vcenter"><button className="btn btn-primary">View Application</button></div>
        </div>

      </div>
    );
  }
}