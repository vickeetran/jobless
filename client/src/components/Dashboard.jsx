import React from 'react';
import $ from 'jquery';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      <div className="container">
        <div className="row">
            <div className="col-xs-6 col-md-6 left-container container">
              <div className="menu-box block"> 
                  <h2 className="titular">Job Apps<button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button></h2>
                  <ul className="menu-box-menu">
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Google<p<div className="menu-box-number">X</div></a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Facebook<div className="menu-box-number">X</div></a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Hack Reactor<div className="menu-box-number">X</div></a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Goodwill<div className="menu-box-number">X</div></a>
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Nasa<div className="menu-box-number">X</div></a>
                      </li>                        
                  </ul>
              </div>
            </div>
            <div className="col-xs-6 col-md-6 left-container container">

              <div className="menu-box block"> 
                <h2 className="titular">Todo<button type="button" className="btn btn-default btn-xs"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
</button></h2>
                  <ul className="menu-box-menu">
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>In-person Interview @ 9am</a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Phone Interview @ 11am</a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Twitter Assignment @ 2pm</a>                            
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Apply to 3 Jobs</a>
                      </li>
                      <li>
                          <a className="menu-box-tab" href="#"><span className="icon scnd-font-color"></span>Edit LinkedIn Profile</a>
                      </li>                        
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