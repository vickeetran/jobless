class EventView extends React.component {
  constructor(props);
  super(props);

  // STUB PROPS
  // this.state = {
  // 	applicationId: 1,
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

  let editable = false;

  editEvent = () => {
	//get props
	//set new variable 'obj' = props object
	this.editable = !this.editable;
	//display obj to client

	//turn fields into input fields, with default values
	  //of what's in the grabbed props
  }

  submitEvent = () => {
  	//set to props
  	
  }


  render() {
  	<div>
      <div className='title'>Chief Excuetive Office</div>
      <div className='company'>Google</div>
      <div className='appId'>app# 123456</div>
      <div className='complogo'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" style="width:50px;height:50px"></div>
      <div contenteditable={this.editable} className='status'>Complete</div>
      <div contenteditable={this.editable} className='type'>In Person</div>
      <div contenteditable={this.editable} className='interviewer'>Eric Schmidt</div>
      <div contenteditable={this.editable} className='date'>26 May 2016</div>
      <div contenteditable={this.editable} className='time'>9:00am PST</div>
      <div contenteditable={this.editable} className='type'>In Person</div>
      <div contenteditable={this.editable} className='emotion'><img src="http://www.hey.fr/tools/emoji/ios_emoji_smiling_face_with_smiling_eyes.png" style="width:25px;height:25px"></div>
      <div contenteditable={this.editable} className='note'>Note to self: Tell him you hate Apple</div>
      <div contenteditable={this.editable} className='followUp'>Yes, on 30 May</div>
      <button className='edit' onClick={this.editEvent}><img src="https://cdn3.iconfinder.com/data/icons/edition/100/pen_paper_2-512.png" style="width:25px;height:25px"></button>
      <button className='save' onClick={this.submitEvent}><img src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Save_black-512.png" style="width:25px;height:25px"></button>
    </div>
  }

}

window.EventView = EventView;
// <button className='accepted'><img src="https://cdn0.iconfinder.com/data/icons/flat-security-icons/512/tick-blue.png" style="width:25px;height:25px"></button>
// <button className='rejected'><img src="https://cdn0.iconfinder.com/data/icons/flat-security-icons/512/close.png" style="width:25px;height:25px"></button>   