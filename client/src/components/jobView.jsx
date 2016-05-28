import React from 'react';

export default class JobView extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    return( 
      <div>
        <div className="container job-details">
          <div className="col-xs-4 vcenter">Company</div>
          <div className="col-xs-4 vcenter">Title</div>
          <div className="col-xs-4 vcenter">URL</div>
          <div className="col-md-4 hidden-xs vcenter">Status</div>
          <div className="col-xs-4 vcenter">Note</div>
        </div>
        <div className="container event-list timeline">
          <div> Date </div>
          <div> Status </div>
          <div> In Person Interview </div>
        </div>
      </div>  
    );
  }
}
// {
//   props.events.map((event)=>{
//     <div> {{event}} </div>
//   })
// }
