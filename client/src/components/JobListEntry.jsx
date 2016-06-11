import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { findDOMNode } from 'react-dom';
import ItemTypes from '../constants/itemTypes'
import { DragSource, DropTarget } from 'react-dnd';

const entrySource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

const entryTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveEntry(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

// export default class Card extends Component {
  // static propTypes = {
  //   connectDragSource: PropTypes.func.isRequired,
  //   connectDropTarget: PropTypes.func.isRequired,
  //   index: PropTypes.number.isRequired,
  //   isDragging: PropTypes.bool.isRequired,
  //   id: PropTypes.any.isRequired,
  //   text: PropTypes.string.isRequired,
  //   moveCard: PropTypes.func.isRequired
  // };

  // render() {
  //   const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
  //   const opacity = isDragging ? 0 : 1;

  //   return connectDragSource(connectDropTarget(
  //     <div style={{ ...style, opacity }}>
  //       {text}
  //     </div>
  //   ));
  // }
// }


// @DropTarget(ItemTypes.JOBLISTENTRY, entryTarget, connect => ({
//   connectDropTarget: connect.dropTarget()
// }))
// @DragSource(ItemTypes.JOBLISTENTRY, entrySource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// }))

export default class JobListEntry extends React.Component {
  // static propTypes = {
  //   connectDragSource: PropTypes.func.isRequired,
  //   connectDropTarget: PropTypes.func.isRequired,
  //   index: PropTypes.number.isRequired,
  //   isDragging: PropTypes.bool.isRequired,
  //   id: PropTypes.any.isRequired,
  //   text: PropTypes.string.isRequired,
  //   moveEntry: PropTypes.func.isRequired
  // };

  constructor(props) {
    super(props);
    this.job = props.job;
    console.log(this.props);
    // this.data = this.props;
    // this.companyName = this.data["data"]["company"];
    // this.title = this.data["data"]["title"];
    // this.jobId = this.data["data"]["id"].toString();
    // console.log('THIS IS JOBID', this.jobId);
  }

  goToJobView() {
    browserHistory.push(`/jobView?id=${this.job.id}`);
  }
  
  render() {
    console.log('PROPS: ', this.props)
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    console.log('connectDropTarget: ', connectDropTarget);
    const opacity = isDragging ? 0 : 1;

    if (this.job.complete) {
      // return (
      return connectDragSource(connectDropTarget(
        <tr className='tr-job complete' onClick={this.goToJobView.bind(this)}>
          <td className='td-company'>{this.job.company}</td>
          <td className='td-position'><a href={this.job.jobURL}>{this.job.title}</a></td>
        </tr>
      ));
    } else {
      // return (
      return connectDragSource(connectDropTarget(    
        <tr className='tr-job' onClick={this.goToJobView.bind(this)}>
          <td className='td-company'>{this.job.company}</td>
          <td className='td-position'><a href={this.job.jobURL}>{this.job.title}</a></td>
        </tr>
      ));
    }
  }
}

module.exports = {
  DropTarget: DropTarget(ItemTypes.JOBLISTENTRY, entryTarget, connect => ({
  connectDropTarget: connect.dropTarget()
})).bind(null,JobListEntry),

  DragSource: DragSource(ItemTypes.JOBLISTENTRY, entrySource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})).bind(null,JobListEntry)
}
  

  
        // <li>
        //   <a className="menu-box-tab">
        //     <span className="icon scnd-font-color"></span>
        //       {this.companyName} {"("}{this.title} {")"}
        //   </a>
        // </li>