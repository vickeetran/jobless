import React from 'react';
import Modal from 'react-modal';

export default class JobView extends React.Component {
  constructor(props) {
    super(props);

    let company = '';   
    let title = '';
  

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
      open: false
    }

    this.openModalAdd = this.openModalAdd.bind(this);
    this.closeModalAdd = this.closeModalAdd.bind(this);

    this.eventOptions = [ 'In Person Interview', 'Phone Interview' ]
   
  }

  openModalAdd () { console.log(this.props);
    this.setState({open: true}); }

  closeModalAdd () { this.setState({open: false}); }

    // <Modal show={this.state.showModal} onHide={this.close}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Modal heading</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //       </Modal.Body>
    // </Modal>

  componentWillMount() {
    //console.log('did', this.props.methods.getJob(1))
    this.props.methods.getJob(1)
  }

  componentWillReceiveProps(nextProps) {
   // this.user = nextProps.user;
   // this.methods = nextProps.methods;
   this.job = nextProps.job;
   // this.jobList = nextProps.jobList;
   // this.event = nextProps.event;

   this.company = this.job.company;
   this.title = this.job.title;
   this.events = this.job.events;

   console.log('next', nextProps);
   console.log('events', this.job.events)

   this.render();
  }



  render() {
    if(this.events) {
      
      return( 
      
      <div className='container job-body'>
    <div className="container col-xs-10 job-details">
      <h2 className="col-xs-12 vcenter">{this.company}</h2>
      <h4 className="col-xs-12 vcenter">{this.title}</h4>
      <div className="col-xs-12 vcenter link"><a href=''>[HARD CODE] https://www.google.com/about/careers/jobs#!t=jo&jid=/google/software-engineer-image-based-rendering-1600-amphitheatre-parkway-mountain-view-1510001&</a></div>
      <div className="col-xs-12 vcenter"><h5>[HARD CODE] In Progress</h5></div>
      <div className="col-xs-12 vcenter"><h5>Note:</h5></div>
      <div className="col-xs-8 vcenter"><div className='note'contenteditable><ul><li>[HARD CODE] referred by Sergey Brin </li><li>[HARD CODE] remember to crack an Apple joke</li></ul></div></div>
    </div>
    <div className='col-xs-2'>
      <img className='logo' src="https://logo.clearbit.com/google.com" data-default-src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png"/>
    </div>
    <div className="col-xs-2">
      <button className='btnoption' id='addbtn' onClick={this.openModalAdd}>
        <img className='options' src={this.icons.add}/>
      </button>
      <button className='btnoption'>
        <img className='options' src={this.icons.edit}/>
      </button>
    </div>
    
    <Modal isOpen={this.state.open} onRequestClose={this.closeModalAdd}>
      <div className='add-modal'>
        <h2>Add Event</h2>
        <button onClick={this.closeModal}>Close</button>
        <button>Submit</button>
        <p>Date:</p>
        <input/>
        <p>Time:</p>
        <input/>
        <p>Type:</p>
        <input/>
        <p>Interviewers:</p>
        <input/>
        <p>Follow Up:</p>
        <input/>
        <p>Status:</p>
        <input/>
        <p>Note:</p>
        <input/> 
      </div>
    </Modal>





    <div className="container event-list timeline col-xs-12">
      
      {JSON.stringify(this.events)}


       <div className='event col-xs-11 vcenter'>
        <div className='event-icon col-xs-1'><img src={this.icons.start}/></div>
        <div className='col-xs-10'><h4>1 May 2016</h4></div>
        <div className='col-xs-10'><h4>Show of Interest</h4></div>
      </div>
    </div>
  </div>  

      );


    } else {

    return( 
      
      <div>loading</div>

    );
  }
  }
}
// {
//   props.events.map((event)=>{
//     <div> {{event}} </div>
//   })
// }
