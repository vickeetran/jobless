import React from 'react';

export default class JobView extends React.Component {
  constructor(props) {
    super(props);
    //this.user = this.props.newsomething.user
  }

  componentWillReceiveProps(nextProps) {
  
    this.user = nextProps.newsomething.user;
    this.render();
  }

  render() {
    return( 
      <div className='container job-body'>
      <div>{JSON.stringify(this.props.newsomething.user)}</div>
    <div className="container col-xs-10 job-details">
      <h2 className="col-xs-12 vcenter">Google</h2>
      <h4 className="col-xs-12 vcenter">Software Engineer, Image-Based Rendering/Computer Vision</h4>
      <div className="col-xs-12 vcenter link"><a href=''>https://www.google.com/about/careers/jobs#!t=jo&jid=/google/software-engineer-image-based-rendering-1600-amphitheatre-parkway-mountain-view-1510001&</a></div>
      <div className="col-xs-12 vcenter"><h5>In Progress</h5></div>
      <div className="col-xs-12 vcenter"><h5>Note:</h5></div>
      <div className="col-xs-8 vcenter">
        <div className='note'contenteditable>
          <ul>
            <li>referred by Sergey Brin</li>
            <li>remember to crack an Apple joke</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='col-xs-2'>
      <img className='logo' src="https://logo.clearbit.com/google.com" data-default-src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png"/>
    </div>

    <div className="container event-list timeline col-xs-12">
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='meeting (3).png'/></div>
        <div className='col-xs-10'><h4>6 June 2016</h4></div>
        <div className='col-xs-10'><h4>2nd Round In Person Interview</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='meeting (3).png'/></div>
        <div className='col-xs-10'><h4>30 May 2016</h4></div>
        <div className='col-xs-10'><h4>1st Round In Person Interview</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='call-in-progress.png'/></div>
        <div className='col-xs-10'><h4>23 May 2016</h4></div>
        <div className='col-xs-10'><h4>Phone Interview</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='exam-a-plus.png'/></div>
        <div className='col-xs-10'><h4>10 May 2016</h4></div>
        <div className='col-xs-10'><h4>Aptitude Test</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='resume.png'/></div>
        <div className='col-xs-10'><h4>5 May 2016</h4></div>
        <div className='col-xs-10'><h4>Application Submitted</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
       <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src='play.png'/></div>
        <div className='col-xs-10'><h4>1 May 2016</h4></div>
        <div className='col-xs-10'><h4>Show of Interest</h4></div>
      </div>
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
