import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    BigCalendar.momentLocalizer(moment);
    this.methods = props.methods;
    this.session = [];
  }

  componentDidMount() {
    this.methods.getSession();
  }

  componentWillReceiveProps(nextProps) {
    const events = [];
    const calendarEvents = nextProps.session.calendarEvents.items;
    for(let i=0;i<calendarEvents.length;i++){
      let event = calendarEvents[i];
      console.log(Date.parse(event.start.dateTime));
      events.push({
        title: event.summary,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      });
    }
    this.session = events;
    this.render();
  }

  render() {
    return (
      <div className="calendar">
        <BigCalendar
          events={this.session}
          defaultDate={new Date()}
        />
      </div>
    )
  }
}