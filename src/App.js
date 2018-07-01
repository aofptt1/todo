import React, { Component } from 'react';
import './App.css';
import HeaderCompon from './componnents/HeaderCompon';
import FormSubmit from './componnents/FormSubmit';

import List from './componnents/List';
import ListItem from './componnents/ListItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        todos:[
            {id:1,name:"aaaaaa",complete:false},
            {id:2,name:"bbbbbb",complete:false}
        ],
        message:""
    };
    //โคตรงง
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onsubmitMessage = this.onsubmitMessage.bind(this);
  }
  onChangeMessage(e){
    this.setState({message:e.target.value});
  }
  onsubmitMessage(e){
    //ป้องกันการเปลียนหน้า
    e.preventDefault();

    let oldtodo = this.state.todos;
    let todoLength = this.state.todos.length;
    let lastId = this.state.todos[todoLength-1].id;

    let newmessage = {id:lastId+1,name:this.state.message,complete:false};
    oldtodo.push(newmessage);
    this.setState({todos:oldtodo});
  }
  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderCompon/>
        <List todos={this.state.todos}>
          <ListItem/>
          </List>
        
        <FormSubmit onChangeMessage={this.onChangeMessage}onsubmitMessage={this.onsubmitMessage}/>

        
      </div>
    );
  }
}

export default App;