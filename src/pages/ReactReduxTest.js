import React, { Component } from "react";
import Header from '../components/Header';
import TaskList from '../components/TaskList';

class ReactReduxTest extends Component{
    render(){
        return(
            <>
            <Header />
            <TaskList />
            </>
        );
    }
}
export default ReactReduxTest;