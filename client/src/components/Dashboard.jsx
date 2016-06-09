import React from 'react';
import $ from 'jquery';
import JobListEntry from './JobListEntry.jsx';
import TodoListEntry from './TodoListEntry.jsx';
import Calendar from './calendar.jsx';
import { Link } from 'react-router';
import Modal from 'react-modal';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.jobList = props.jobList;
    this.event = props.event;
    this.methods = props.methods;
    this.openModalAdd = this.openModalAdd.bind(this);
   this.closeModalAdd = this.closeModalAdd.bind(this);
   // this.openJobSearchForm = this.openJobSearchForm(this);
   // this.closeJobSearchForm = this.closeJobSearchForm(this);
   this.state = {
    open: false
    // formOpen: false
   }

  }

  handleSubmit (event) {
    event.preventDefault();
    var formData = {
      title: this.refs.title.value,
      company: this.refs.company.value,
      description: this.refs.description.value
    }
    this.methods.postJob(formData);
  }
  componentDidMount() {
    this.methods.getJobList();
    this.methods.getEvent();
  }

  componentWillReceiveProps(nextProps) {
   this.jobList = nextProps.jobList;
   this.event = nextProps.event;
   this.render()
  }

  openModalAdd () { 
    console.log(this.props);
    this.setState({open: true}); }

  closeModalAdd () { 
    this.setState({open: false}); 
  }

  // openJobSearchForm () {
  //   this.setState({formOpen: true});
  // }

  // closeJobSearchForm () {
  //   this.setState({formOpen: false});
  // }

  render() {
     var jobs = this.jobList;
     var events = this.event;

     if(Array.isArray(this.event)) {
       events = this.event;
     } else {
      events = [];
     }

     console.log('inside dashboard render', events);
      return(
        <div className="dashboard">
          <Link to='/search' ><button>Search For Jobs</button></Link>
          <Link to='/calendar' ><button>Calendar</button></Link>

          <Modal isOpen={this.state.open} onRequestClose={this.closeModalAdd}>
               <div id="form-main">
            <div id="form-div">
              <form className="form" id="form1" onSubmit={this.handleSubmit.bind(this)}>
                <p className="inputForm">
                  <input type="text" ref="company" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name"/>
                </p>
                <p className="inputForm">
                  <input type="text" ref="title" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Position Title"/>
                </p>
                <p className="text">
                  <textarea name="text" ref="description" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Job Description"></textarea>
                </p>
                <div className="submit">
                  <input type="submit" value="ADD NEW POSITION" id="button-blue" />
                  <div className="ease"></div>
                </div>
              </form>
        </div>
      </div>
         </Modal>



        <div className="container">
          <div className="row">
              <div className="col-xs-5 col-md-5 left-container container">
                <div className="menu-box block"> 
                    <h2 className="titular">Active Job Apps
                      <button type="button" className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true" onClick={this.openModalAdd}></span>
                      </button>
                    </h2>
                    <ul className="menu-box-menu">
                      {jobs.map(job => <JobListEntry key={job.id} data={job}/>)}
                    </ul>
                </div>
              </div>
              <div className="col-xs-7 col-md-7 left-container container">
                <div className="menu-box block"> 
                  <h2 className="titular">Today's Appointments<button type="button" className="btn btn-default btn-xs">
  </button></h2>
                    <ul className="menu-box-menu">
                      {events.map(event => <TodoListEntry key={event.id} data={event}/>)}
                    </ul>
                </div>
                <div className="jobPosting-month block"> 
                  <div className="arrow-btn-container">
                    <a className="arrow-btn left" href="#202"><span className="icon fontawesome-angle-left"></span></a>
                    <h2 className="titular">Job Depot</h2>
                    <a className="arrow-btn right" href="#203"><span className="icon fontawesome-angle-right"></span></a>
                  </div>
                  <table className="jobPosting">
                    <thead className="days-week">
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Job Posting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Yelp</td>
                            <td>Software Engineer</td>
                            <td><a href="http://www.yelp.com/careers/job-openings/cdefb0de-1998-4814-b459-c4417ef94efc?description=Software-Engineer-New-Grad_College-Engineering-Product_San-Francisco-CA&lever-source=indeed">Product Development Team</a></td>
                        </tr>
                        <tr>
                            <td>Pinterest</td>
                            <td>Software Engineer</td>
                            <td><a href="http://jobs.bvp.com/jobdetail.php?jobid=526487">Community Ops and Trust & Safety Team</a></td>
                        </tr>
                      </tbody>
                  </table>
                  </div> 
              </div>
          </div>
        </div>
      </div>
      );
    }
}