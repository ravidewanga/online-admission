import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { addTask, incrementCounter } from "../store/ActionCreators";

class TaskList extends Component {
  createNewTask = () => {
    // type: 'ADD_TASK'
    const payload = {
      id: 3,
      title: "ToDo 3",
      description: "Some description here"
    };

    this.props.handleAddTask(payload.id, payload.title, payload.description);
    //dispatch(actionCreateNewTask(payload))
  };

  incrementCounter = () => {
    // type: 'INCREMENT_COUNTER'
    const payload = {
      counter: 4
    };
    this.props.handleIncrementCounter(payload.counter);
  };

  render() {
    const { tasks, cartCount } = this.props;
    console.log("TaskList: render");
    return (
      <div>
        <ul>
          {tasks.map((v, i) => {
            return (
              <li key={i}>
                {v.title} - {v.description}
              </li>
            );
          })}
        </ul>
        <button onClick={this.createNewTask}>Create Task</button>&nbsp;
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddTask: (id, title, description) =>
    dispatch(addTask(id, title, description)),

  handleIncrementCounter: counter => dispatch(incrementCounter(counter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
