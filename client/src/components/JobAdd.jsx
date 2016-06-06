import React from 'react';

import Dashboard from './Dashboard.jsx';

export default class JobAdd extends React.Component {
  constructor(props) {
    super(props);
    this.methods = props.methods;
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

  render() {
    return( 
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
              <input type="submit" value="ADD NEW POSITION" id="button-blue"/>
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}