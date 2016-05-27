import React from 'react';

//the click event should invoke the this.setState function in the parent component that sends the "completed" message to the database

export TodoList = (props) => {
  return ( 
    <div>
      <span> {props.todo } </span> 
      <input type="checkbox" toggleComplete={props.complete}/>
    </div>
  );
}
