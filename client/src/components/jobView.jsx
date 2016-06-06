import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as User from '../actions/user.js';
import * as Job from '../actions/job.js';
import * as JobList from '../actions/joblist.js';
import * as Debug from '../actions/debug.js';
import * as Event from '../actions/event.js';

class JobView extends React.Component {
  constructor(props) {
    super(props);

    let company = '';
    let title = '';
    this.methods = props.methods;
    console.log('t')

    //object to hold all the events being rendered
    //key 0 is a dummy so that we won't run into 'undefined' errors
    this.eventHolder = {
      '0': {
        company: '',
        date: "",
        description: '',
        isInterview: '',
        interviewers: '',
        note: '',
        complete: '',
        emotion: '',
        positionId: ''
      }
    };

    //this eventId will be changed according to which event edit button is triggered
    this.eventId = '0';

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

    this.emoji = {
      //from twitter emoji
      'happy': 'http://bit.ly/1VHa8Mi',
      'delighted': 'http://bit.ly/1X6sFT0',
      'sunglasses': 'http://bit.ly/1WBDs7V', 
      'money': 'http://bit.ly/1RV7qeY',
      'smirk': 'http://bit.ly/1PzbOWS',
      'soso': 'http://bit.ly/1UlPigr',
      'notsure': 'http://bit.ly/1tbv2s5',
      'crying': 'http://bit.ly/1UCvB6w',
      'wtf': 'http://bit.ly/1U3qgVY',
      'angry': 'http://bit.ly/1Y2ARTv' 
    }

    this.emotion = '';

    //modal business
    this.state = {
      open: false
    }

    this.closeModal = this.closeModal.bind(this);

    //to determine whether questions or notes section will be rendered
    this.haveQuestions = false;
    this.haveNotes = false;

    //modal business - all three buttons (addEvent, editEvent and editJob)
    //share the same modal, so the following is to determine which forms to hide
    this.addFlag = true;
    this.editJobFlag = true;
    this.editEventFlag = true;

    this.addEvent = () => {
      this.addFlag = false;
      this.editJobFlag = true;
      this.editEventFlag = true;
    };

    this.updateEvent = () => {
      this.addFlag = true;
      this.editJobFlag = true;
      this.editEventFlag = false;
    };

    this.updateJob = () => {
      this.addFlag = true;
      this.editJobFlag = false;
      this.editEventFlag = true;
    };

  }

  openModal() { console.log(this.props);
    this.setState({open: true}); }

  closeModal() { this.setState({open: false}); }


  componentWillMount() {
    // var { id } = this.context.router.getCurrentQuery();
    var id = this.props.location.query.id;
    this.props.methods.getJob(id);
  }

  componentWillReceiveProps(nextProps) {
   // this.user = nextProps.user;
   this.methods = nextProps.methods;
   this.job = nextProps.job;
   // this.jobList = nextProps.jobList;
   // this.event = nextProps.event;

   this.company = this.job.company;
   this.title = this.job.title;
   this.events = this.job.events;

   console.log('next', nextProps);
   console.log('events', this.job.events);
   console.log('test', this.test);

   this.render();
  }

  createEvent(event) {
    event.preventDefault();

    let eventData = {
      company: 'Google',
      date: '2016-05-02T00:27:13.000Z',
      description: 'blah',
      isInterview: true,
      interviewers: this.refs.interviewers.value,
      note: 'I got dat',
      complete: true,
      image: 'ahhhhhhhh',
      emotion: 'WHO!?!?!?!',
      positionId: 1
    }

    //this.test.push(this.refs);

    this.methods.postEvent(eventData);
  }

  editJob(event) {
   event.preventDefault();

    let jobData = {
      title: this.refs.title.value,
      company: 'Google',
      description: 'Best job evah',
      userId: 1,
      id: 1
    }

    //this.test.push(this.refs);

    this.methods.putJob(jobData);
  }

  editEvent(event) {
   event.preventDefault();

    let jobData = {
      company: 'Google',
      date: "2016-05-02T00:27:13.000Z",
      description: 'Cool stuff',
      isInterview: true,
      interviewers: this.refs.eventinterviewers,
      note: 'I got dis',
      complete: true,
      emotion: 'EXCITED!!!!!!',
      positionId: 1,
      id: this.eventId
    }

    this.methods.putEvent(eventData);
  }


  render() {
    if(this.events) {
      return( 
      <div className='container job-body'>
        <div className="container col-xs-10 job-details">
          <h2 className="col-xs-12 vcenter">{this.company}</h2>
          <h4 className="col-xs-12 vcenter">{this.title}</h4>
          <div className="col-xs-12 vcenter link"><a href=''>[HARD CODE.. if this.complete then return Complete otherwise in progress] https://www.google.com/about/careers/jobs#!t=jo&jid=/google/software-engineer-image-based-rendering-1600-amphitheatre-parkway-mountain-view-1510001&</a></div>
          <div className="col-xs-12 vcenter"><h5>[HARD CODE] In Progress</h5></div>
          <div className="col-xs-12 vcenter"><h5>Note:</h5></div>
          <div className="col-xs-8 vcenter"><div className='note'contenteditable><ul><li>[HARD CODE] referred by Sergey Brin </li><li>[HARD CODE] remember to crack an Apple joke</li></ul></div></div>
        </div>
        <div className='col-xs-2'>
          <img className='logo' src="https://logo.clearbit.com/google.com" data-default-src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png"/>
        </div>
        <div className="col-xs-2">
          <button className='btnoption' id='addbtn' onClick={() => { this.addEvent(); this.openModal()}}>
            <img className='options' src={this.icons.add}/>
          </button>
          <button className='btnoption' onClick={() => { this.updateJob(); this.openModal()}}>
            <img className='options' src={this.icons.edit}/>
          </button>
        </div>
    
        <Modal isOpen={this.state.open} onRequestClose={this.closeModal}>
          <form className='add-modal' hidden={this.addFlag}>
            <h2>Add Event</h2>
            <button onClick={this.closeModal}>Close</button>
            <button onClick={this.createEvent.bind(this)}>Submit</button>
            <p>Date:</p>
            <input ref='date'/>
            <p>Time:</p>
            <input ref='time'/>
            <p>Type:</p>
            <input ref='type'/>
            <p>Interviewers:</p>
            <input ref='interviewers'/>
            <p>Follow Up:</p>
            <input ref='followup'/>
            <p>Status:</p>
            <input ref='status'/>
            <p>Note:</p>
            <input ref='note'/> 
          </form>
          
          <form className='edit-modal' hidden={this.editJobFlag}>
            <h2>Edit Job</h2>
            <button onClick={this.closeModal}>Close</button>
            <button onClick={this.editJob.bind(this)}>Submit</button>
            <p>Title:</p>
            <input ref='title' defaultValue={this.title}/>
            <p>Completed?</p>
            <input/>
          </form>

          <form className='edit-modal' hidden={this.editEventFlag}>
            <h2>Edit Event</h2>
            <button onClick={this.closeModal}>Close</button>
            <button onClick={this.editEvent.bind(this)}>Submit</button>
            <p>Date:</p>
            <input ref='date' defaultValue={this.eventHolder[this.eventId].date}/>
            <p>Time:</p>
            <input ref='time'/>
            <p>Type:</p>
            <input ref='type'/>
            <p>Interviewers:</p>
            <input ref='interviewers' defaultValue={this.eventHolder[this.eventId].interviewers}/>
            <p>Follow Up:</p>
            <input ref='followup'/>
            <p>Status:</p>
            <input ref='status'/>
            <p>Note:</p>
            <input ref='note'/> 
            <p>Emotion:</p>
              <button className='emojibtn' onClick={this.emotion = 'happy'}><img src={this.emoji.happy}/></button>
              <button className='emojibtn' onClick={this.emotion = 'delighted'}><img src={this.emoji.delighted}/></button>
              <button className='emojibtn' onClick={this.emotion = 'sunglasses'}><img src={this.emoji.sunglasses}/></button>
              <button className='emojibtn' onClick={this.emotion = 'money'}><img src={this.emoji.money}/></button>
              <button className='emojibtn' onClick={this.emotion = 'smirk'}><img src={this.emoji.smirk}/></button>
              <button className='emojibtn' onClick={this.emotion = 'soso'}><img src={this.emoji.soso}/></button>
              <button className='emojibtn' onClick={this.emotion = 'notsure'}><img src={this.emoji.notsure}/></button>
              <button className='emojibtn' onClick={this.emotion = 'crying'}><img src={this.emoji.crying}/></button>
              <button className='emojibtn' onClick={this.emotion = 'wtf'}><img src={this.emoji.wtf}/></button>
              <button className='emojibtn' onClick={this.emotion = 'angry'}><img src={this.emoji.angry}/></button>
          </form>
        </Modal>

        <div className="container event-list timeline col-xs-12">
          {this.events.map((event) => {
            this.haveQuestions = false;
            this.haveNotes = false;
            this.eventHolder[event.id] = event;
            return (
              <div className='event col-xs-11 vcenter'>
                <div className='event-icon col-xs-1'><img src={this.icons.person}/></div>
                <div className='col-xs-9'><h4>{event.description}</h4></div>
                <div className='col-xs-1'>
                  <button className='edit' onClick={() => { this.eventId = JSON.stringify(event.id); this.updateEvent(); this.openModal()}}>
                    <img className='editimg' src={this.icons.edit}/>
                  </button>
                </div>
                <div className='col-xs-10'><h4>1st Round In Person Interview</h4></div>
                <div className='col-xs-10 event-body'>
                  <div className='col-xs-10 h5-no-pad'><h5 className=''>Interviewer: {event.interviewers}</h5></div>
                  <div className='col-xs-2'><img className="emoji" src={this.emoji.wtf}/></div>

                  <div className='col-xs-10 h5-no-pad' hidden={this.haveQuestions}>
                    <p><b>Questions asked:</b></p>
                    <ol>
                    <li>Why Google?</li>
                    <li>Do you hate Apple?</li>
                    <li>Do you use Google+? Don't Lie.</li>
                    </ol>
                  </div>

                  <div className='col-xs-10 h5-no-pad' hidden={this.haveNotes}>
                    <p><b>Note:</b></p>
                    <ul>
                    <li>{event.note}</li>
                    </ul>
                    </div>
                  </div>
           
                  <div className='line'></div>
              </div>
            )
          })}

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


const mapStateToProps = function mapStateToProps(state) {
  const {debug, user, job, jobList, event} = state;

  return {
    debug,
    user,
    job,
    jobList,
    event
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  //PUTs currently crash server if no id is provided in data object
  return {
    methods : {
      debugOn: () => {
        dispatch(Debug.on());
      },
      debugOff: () => {
        dispatch(Debug.off());
      },
      getUser: () => {          //GETs /api/user/:id and sets user to response
        dispatch(User.get());
      },
      postUser: (data) => {     //POSTs /api/user and sets user to response
        dispatch(User.post(data));
      },
      putUser: (data) => {      //PUTs /api/user and sets user to response
        dispatch(User.put(data));
      },
      getJob: (id) => {
        dispatch(Job.get(id));
      }, 
      postJob: (data) => {
        dispatch(Job.post(data));
      },
      putJob: (data) => {
        dispatch(Job.put(data));
      },
      getJobList: () => {
        dispatch(JobList.get());
      },
      getEvent: () => {
        dispatch(Event.get());
      },
      postEvent: (data) => {
        dispatch(Event.post(data));
      },
      putEvent: (data) => {
        dispatch(Event.put(data));
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (JobView);