import React from 'react';
import $ from 'jquery';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/event',
      dataType: 'json',
      success: function(data) {
        console.log('this is get position data', data);
        this.setState({data: data});
      }.bind(this),
      error: function(data) {
        console.log('error retrieving data');
      }.bind(this)
    });
  }

  render() {
    return(
      <div className="row">
        <div className="col-xs-6 col-md-3">
          
          <div className="container job-list">
            
            <div className="header">
              <div className="col-xs-4 vcenter">Company</div>
              <div className="col-xs-4 hidden-xs vcenter">Status</div>
            </div>

            <div className="listing">
              <div className="col-xs-4 company text-uppercase">FaceBook</div>
              <div className="col-xs-4 hidden-xs status">Not Started</div>
              <div className="col-xs-4 vcenter"><button className="btn btn-primary">View Application</button></div>
            </div>

            <div className="listing">
              <div className="col-xs-4 vcenter company text-uppercase">Google</div>
              <div className="col-xs-4z hidden-xs vcenter status">In Progress</div>
              <div className="col-xs-4 vcenter"><button className="btn btn-primary">View Application</button></div>
            </div>

          </div>

        </div>

        <div className="col-xs-6 col-md-3">
          
          <div className="container todo-list">
            
            <div className="row">
              <div className="col-xs-4 vcenter">Todo</div>
            </div>
          
          </div>
          
          <div className="container calendar">
          
            <div className="row header">
              <div className="col-xs-4 vcenter">Calendar</div>
            </div>
          
          </div>

        </div>

      </div>
    );
  }
}