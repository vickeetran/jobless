var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');


class EventEdit extends React.component {
  contructor(props);
  super(props);

  //STUB PROPS
  //props = {
  // 	jobId: 1,
  //	eventId: 1,
  // 	jobTitle: 'CEO',
  // 	company: 'Google',
  // 	eventType: 'In person',
  // 	interviewers: ['Eric Schmidt'],
  // 	date: '26052016',
  // 	time: '0900',
  // 	image: 'somelink',
  // 	emotion: '',
  // 	note: 'remember to drop iphone',
  // 	complete: false,
  // 	followUp: { option: false, 
  // 				days: 0 }
  // }


  newEventIdGenerator = () => {

  }

  if( props.eventId===undefined ) {
  	props.eventId = newEventIdGenerator();
  }

  eventOptions = [ 'In Person Interview', 'Phone Interview' ]
  emotionOptions = [ ':happy', ':sad', ':wtf' ]


  render() {
  	//eventType
    <DropdownButton>
      {eventOptions.map((option) => {
        <MenuItem>{option}</MenuItem>
      })}
    </DropdownButton>
    //interviewers
    <input type="text" value="Name">
    //date
    <DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}
    isClearable={true} />
    placeholderText='No data selected' />
    //time
  	<input type="time"> 
  	//emotion
  	<DropdownButton>
      {emotionOptions.map((option) => {
        <MenuItem>{option}</MenuItem>
      })}
    </DropdownButton>
    //note
  	<input>
  	//completed? boolean
  	<label class="switch">
  		<input type="checkbox">
  		<div class="slider"></div>
	</label>
  	//followUp?
  	<label class="switch">
  		<input type="checkbox">
  		<div class="slider"></div>
	</label>
  	//alert, default = 3 days
  	<DatePicker
    selected={this.state.startDate + 2}
    onChange={this.handleChange}
    isClearable={true} />
    placeholderText='No data selected' />



}