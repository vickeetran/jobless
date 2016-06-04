import React from 'react';
export default class JobAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return( 
      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="inputForm">
              <input type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name"/>
            </p>
            <p className="inputForm">
              <input type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Position Tile"/>
            </p>
            <p className="text">
              <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Job Description"></textarea>
            </p>
            
            <p className="text">
              <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Notes"></textarea>
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