import React from 'react';

export default class JobView extends React.Component {
  constructor(props) {
    super(props);
    //this.user = this.props.newsomething.user

  this.icons = {
    //from flaticon and noun project
    add: 'http://bit.ly/22ANd6h',
    edit: 'http://bit.ly/1sPUv9F',
    person: 'http://bit.ly/1VzViXR',
    phone: 'http://bit.ly/1XlMgzo',
    test: 'http://bit.ly/1RRIDJ1',
    apply: 'http://bit.ly/1XTFqj9',
    start: 'http://bit.ly/1qvVKtM',
    stop: 'http://bit.ly/1r4nbuq'
  }

  this.state = {
    showModal: false
  }

  this.close = () => { 
    this.setState({ showModal: false });
  }

  this.open = () => {
    this.setState({ showModal: true });
  }
 
  }

  componentWillReceiveProps(nextProps) {
  
    this.user = nextProps.newsomething.user;
    this.render();
  }

    // <Modal show={this.state.showModal} onHide={this.close}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Modal heading</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //       </Modal.Body>
    // </Modal>
  render() {
    return( 
      <div className='container job-body'>
    <div className="container col-xs-10 job-details">
      <h2 className="col-xs-12 vcenter">Google</h2>
      <h4 className="col-xs-12 vcenter">Software Engineer, Image-Based Rendering/Computer Vision</h4>
      <div className="col-xs-12 vcenter link"><a href=''>https://www.google.com/about/careers/jobs#!t=jo&jid=/google/software-engineer-image-based-rendering-1600-amphitheatre-parkway-mountain-view-1510001&</a></div>
      <div className="col-xs-12 vcenter"><h5>In Progress</h5></div>
      <div className="col-xs-12 vcenter"><h5>Note:</h5></div>
      <div className="col-xs-8 vcenter"><div className='note'contenteditable><ul><li>referred by Sergey Brin </li><li> remember to crack an Apple joke</li></ul></div></div>
    </div>
    <div className='col-xs-2'>
      <img className='logo' src="https://logo.clearbit.com/google.com" data-default-src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png"/>
    </div>
    <div className="col-xs-2">
      <button className='btnoption' id='addbtn' onClick={this.open}>
        <img className='options' src={this.icons.add}/>
      </button>
      <button className='btnoption'>
        <img className='options' src={this.icons.edit}/>
      </button>
    </div>


    <div className="container event-list timeline col-xs-12">
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.stop}/></div>
        <div className='col-xs-9'><h4>6 June 2016</h4></div>
        <div className='col-xs-1'><img className='edit' src={this.icons.edit}/></div>
        <div className='col-xs-10'><h4>2nd Round In Person Interview</h4></div>
        <div className='col-xs-10 event-body'>
          <div>Interviewer: Eric Schmidt</div>
          <div>Note</div>
        </div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.person}/></div>
        <div className='col-xs-9'><h4>30 May 2016</h4></div>
        <div className='col-xs-1'><img className='edit' src={this.icons.edit}/></div>
        <div className='col-xs-10'><h4>1st Round In Person Interview</h4></div>
        <div className='col-xs-10 event-body'>
          <div className='col-xs-10 h5-no-pad'><h5 className=''>Interviewer: Sundar Pichai</h5></div>
          <div className='col-xs-2'><img className="emoji" src="money.png"/></div>
          <div className='col-xs-10 h5-no-pad'>
            <p><b>Questions asked:</b></p>
            <ol>
              <li>Why Google?</li>
              <li>Do you hate Apple?</li>
              <li>Do you use Google+? Don't Lie.</li>
            </ol>
          </div>
          <div className='col-xs-10 h5-no-pad'>
            <p><b>Note:</b></p>
            <ul>
              <li>Nice guy</li>
              <li>Likes coffee</li>
              <li>Went to Wharton</li>
            </ul>
          </div>
        </div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.phone}/></div>
        <div className='col-xs-9'><h4>23 May 2016</h4></div>
        <div className='col-xs-1'><img className='edit' src={this.icons.edit}/></div>
        <div className='col-xs-10'><h4>Phone Interview</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.test}/></div>
        <div className='col-xs-9'><h4>10 May 2016</h4></div>
        <div className='col-xs-1'><img className='edit' src={this.icons.edit}/></div>
        <div className='col-xs-10'><h4>Aptitude Test</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
      <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.apply}/></div>
        <div className='col-xs-9'><h4>5 May 2016</h4></div>
        <div className='col-xs-1'><img className='edit' src={this.icons.edit}/></div>
        <div className='col-xs-10'><h4>Application Submitted</h4></div>
        <div className='col-xs-10'><a>View Details</a></div>
        <div className='line'></div>
      </div>
       <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.start}/></div>
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
