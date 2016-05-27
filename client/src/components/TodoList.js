import React from 'react';
import TodoListEntry from './TodoList';


/*
parent component should pass two things:
  - the events that are due today (including the completion status in the object)
  - a function to toggle the completion status
*/
export TodoList = (props) => {
  let todos = props.todos.map( (todo) => {
    <TodoListEntry todo={props.todo} />
  }
  return (
    <div>{todos}<div>
  );
}