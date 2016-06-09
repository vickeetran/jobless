import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import fetch from 'isomorphic-fetch';


import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import * as Session from '../actions/session.js';



export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    BigCalendar.momentLocalizer(moment);
    this.methods = props.methods;
    
    this.state = {
      events: []
    }


  }

  componentDidMount() {
    // this.methods.getSession();

    fetch('/api/session', {credentials: 'same-origin'})
    .then( res => res.json() )
    .then( user => {
      console.log(user)

      const events = [];
      const calendarEvents = user.calendarEvents.items;
      for(let i=0;i<calendarEvents.length;i++){
        let event = calendarEvents[i];
        console.log(Date.parse(event.start.dateTime));
        events.push({
          title: event.summary,
          start: new Date(event.start.dateTime),
          end: new Date(event.end.dateTime),
        });
      }

      this.setState({
        events: events
      })
      
    })
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    console.log(this.session);
    return (
      <div className="calendar">
        <BigCalendar
          events={this.state.events}
          defaultDate={new Date()}
        />
      </div>
    )
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const {session} = state;

  return {
    session
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  //PUTs currently crash server if no id is provided in data object
  return {
    methods : {
      getSession: () => {
        dispatch(Session.get());
      },
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Calendar)
