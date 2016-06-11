import React from 'react';
import JobListEntry from './JobListEntry.jsx';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({job, index}) => {
  // return (<JobListEntry key={job.id} job={job} />)
 if (job.complete) {
   return (
     <li className='li-job complete'>
       <p className='li-company'>{job.company}</p>
       <p className='li-position'><a href={job.jobURL}>{job.title}</a></p>
     </li>
   )
 } else {
   return (
     <li className='li-job'>
       <p className='li-company'>{job.company}</p>
       <p className='li-position'><a href={job.jobURL}>{job.title}</a></p>
     </li>
   )
 }
});

const SortableList = SortableContainer(({activeJobs, toDoJobs}) => {
  // console.log('!!!!!', activeJobs.map(job => job.company));
  let adjustment = activeJobs.length;
  return (
    <div>
      <ul>
        {
          activeJobs.map( (job, index) => {
            return (<SortableItem key={`job-${index}`} index={index} job={job} />)
            // return <JobListEntry key={`job-${index}`} job={job} index={index} />
          })
        }
      </ul>
      <div>!!-----------------------------!!</div>
      <ul>
        {
          toDoJobs.map( (job, index) => {
            return (<SortableItem key={`job-${index+adjustment}`} index={index+adjustment} job={job} />)
            // return <JobListEntry key={`job-${index}`} job={job} index={index} />
          })
        }
      </ul>
    </div>
  )
  // return (
  //   <div>
  //     <table className="jobPosting activeApps">
  //       <thead className="days-week">
  //           <tr>
  //               <th>Company</th>
  //               <th>Job Posting</th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           activeJobs.map( (job, index) => {
  //             return (<SortableItem key={`job-${index}`} index={index} job={job} />)
  //             // return <JobListEntry key={`job-${index}`} job={job} index={index} />
  //           })
  //         }
  //       </tbody>
  //     </table>

  //     <table className="jobPosting toDoApps">
  //       <thead className="days-week">
  //           <tr>
  //               <th>Company</th>
  //               <th>Job Posting</th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           toDoJobs.map( (job, index) => {
  //             return (<SortableItem key={`job-${index+adjustment}`} index={index+adjustment} job={job}  />)
  //             // return <JobListEntry key={`job-${index}`} job={job} index={index} />
  //           })
  //         }
  //       </tbody>
  //     </table>
  //   </div>
  // );
});



export default class JobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeJobs: [],
      toDoJobs: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      activeJobs: this.props.activeJobs,
      toDoJobs: this.props.toDoJobs
    })
    // this.state.jobs = this.props.jobs
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeJobs: this.props.activeJobs,
      toDoJobs: this.props.toDoJobs
    })
  }

  onSortStart({node, index}) {
    console.log('NODE: ', node);
    node = <tr><td>TEST</td></tr>
  }

  onSortEnd({oldIndex, newIndex}) {
    console.log('old: ', oldIndex)
    console.log('new: ', newIndex)
    let adjustment = this.state.activeJobs.length;
    let newActiveJobs = this.state.activeJobs.slice();
    let newToDoJobs = this.state.toDoJobs.slice();
    //if position grabbed is an active job
    if (oldIndex < adjustment) {
      //if swapping with another activeJob
      if (newIndex < adjustment) {
        newActiveJobs = arrayMove(this.state.activeJobs, oldIndex, newIndex);
      //if moving activeJob to toDoJob
      } else {
        let jobToMove = newActiveJobs[oldIndex];
        newToDoJobs.splice(newIndex - adjustment, 0, jobToMove)
        newActiveJobs.splice(oldIndex, 1);
      }

    //if position grabbed is a to-do job
    } else {
      //if swapping with another to-do job
      if (newIndex >= adjustment) {
        newToDoJobs = arrayMove(this.state.toDoJobs, oldIndex-adjustment, newIndex-adjustment);
      //if moving toDoJob to activeJob
      } else {
        let jobToMove = newToDoJobs[oldIndex - adjustment];
        newActiveJobs.splice(newIndex, 0, jobToMove);
        newToDoJobs.splice(oldIndex - adjustment, 1);
      }
    }
    this.setState({
      activeJobs: newActiveJobs,
      toDoJobs: newToDoJobs
    });

    // console.log('active: ', newActiveJobs.map(job => job.company))
    // console.log('toDo: ', newToDoJobs.map(job => job.company))
  }

  render() {
    return (
      <SortableList toDoJobs={this.state.toDoJobs}
                    activeJobs={this.state.activeJobs}
                    // onSortStart={this.onSortStart.bind(this)}
                    onSortEnd={this.onSortEnd.bind(this)}
                    // transitionDuration={0}
                    />
    )
  }
}
