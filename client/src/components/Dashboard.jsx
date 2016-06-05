import React from 'react';
import $ from 'jquery';
import JobListEntry from './JobListEntry.jsx';
import TodoListEntry from './TodoListEntry.jsx';
import Modal from 'react-modal';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.jobList = props.jobList;
    this.event = props.event;
    this.methods = props.methods;
    this.openModalAdd = this.openModalAdd.bind(this);
   this.closeModalAdd = this.closeModalAdd.bind(this);
   this.state = {
    open: false
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

  openModalAdd () { console.log(this.props);
   this.setState({open: true}); }

 closeModalAdd () { this.setState({open: false}); }

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
        <div>
          <nav role="navigation" className="navbar navbar-default">
            <a href="#" className="navbar-brand">JobAppy</a>
              <div id="navbarCollapse" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="logout"><a href="#">Logout</a></li>
                </ul>
              </div>
          </nav>
          <Modal isOpen={this.state.open} onRequestClose={this.closeModalAdd}>
               <div id="form-main">
            <div id="form-div">
              <form className="form" id="form1" onSubmit={this.handleSubmit.bind(this)}>
                <p className="inputForm">
                  <input type="text" ref="company" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name"/>
                </p>
                <p className="inputForm">
                  <input type="text" ref="title" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Position Tile"/>
                </p>
                <p className="text">
                  <textarea name="text" ref="description" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Job Description"></textarea>
                </p>
                <div className="submit">
                  <input type="submit" value="ADD NEW POSITION" id="button-blue" onClick={this.closeModalAdd}/>
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
                    <h2 className="titular">Job Apps
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
                  <h2 className="titular">Todo<button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
  </button></h2>
                    <ul className="menu-box-menu">
                      {events.map(event => <TodoListEntry key={event.id} data={event}/>)}
                    </ul>
                </div>
                <div className="calendar-month block"> 
                  <div className="arrow-btn-container">
                    <a className="arrow-btn left" href="#202"><span className="icon fontawesome-angle-left"></span></a>
                    <h2 className="titular">June 2016</h2>
                    <a className="arrow-btn right" href="#203"><span className="icon fontawesome-angle-right"></span></a>
                  </div>
                  <table className="calendar">
                    <thead className="days-week">
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>R</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><a className="scnd-font-color" href="#100">1</a></td>
                        </tr>
                        <tr>
                            <td><a className="scnd-font-color" href="#101">2</a></td>
                            <td><a className="today" href="#102">3</a></td>
                            <td><a className="scnd-font-color" href="#103">4</a></td>
                            <td><a className="scnd-font-color" href="#104">5</a></td>
                            <td><a className="scnd-font-color" href="#105">6</a></td>
                            <td><a className="scnd-font-color" href="#106">7</a></td>
                            <td><a className="scnd-font-color" href="#107">8</a></td>
                        </tr>
                        <tr>
                            <td><a className="scnd-font-color" href="#108">9</a></td>
                            <td><a className="scnd-font-color" href="#109">10</a></td>
                            <td><a className="scnd-font-color" href="#110">11</a></td>
                            <td><a className="scnd-font-color" href="#111">12</a></td>
                            <td><a className="scnd-font-color" href="#112">13</a></td>
                            <td><a className="scnd-font-color" href="#113">14</a></td>
                            <td><a className="scnd-font-color" href="#114">15</a></td>
                        </tr>
                        <tr>
                            <td><a className="scnd-font-color" href="#115">16</a></td>
                            <td><a className="scnd-font-color" href="#116">17</a></td>
                            <td><a className="scnd-font-color" href="#117">18</a></td>
                            <td><a className="scnd-font-color" href="#118">19</a></td>
                            <td><a className="scnd-font-color" href="#119">20</a></td>
                            <td><a className="scnd-font-color" href="#120">21</a></td>
                            <td><a className="scnd-font-color" href="#121">22</a></td>
                        </tr>
                        <tr>
                            <td><a className="scnd-font-color" href="#122">23</a></td>
                            <td><a className="scnd-font-color" href="#123">24</a></td>
                            <td><a className="scnd-font-color" href="#124">25</a></td>
                            <td><a className="scnd-font-color" href="#125">26</a></td>
                            <td><a href="#126">27</a></td>
                            <td><a href="#127">28</a></td>
                            <td><a href="#128">29</a></td>
                        </tr>
                        <tr>
                            <td><a href="#129">30</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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