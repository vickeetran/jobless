import React from 'react';
import JobList from './jobList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return(  
      <div>
        Hey world
        <JobList />
      </div>
      
    );
  }
}