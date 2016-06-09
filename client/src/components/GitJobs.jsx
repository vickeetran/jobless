import React from 'react';
import fetch from 'isomorphic-fetch';

import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';

export default class GitJobs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("gitjobs mounted");
    fetch('/gitjobs', {credentials: 'same-origin'})
    .then( res => res.json() )
    .then( jobs => {
      console.log('JOBSSSZ', jobs);
    })    
  }

  componentWillReceiveProps(nextProps) {
    // const events = [];
    // const calendarEvents = nextProps.session.calendarEvents.items;
    // for(let i=0;i<calendarEvents.length;i++){
    //   let event = calendarEvents[i];
    //   console.log(Date.parse(event.start.dateTime));
    //   events.push({
    //     title: event.summary,
    //     start: new Date(event.start.dateTime),
    //     end: new Date(event.end.dateTime),
    //   });
    // }
    // this.session = events;
    // this.render();
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}