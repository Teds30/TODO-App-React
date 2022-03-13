import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import {v4 as uuid} from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => this.setState({todos: res.data}))
  }

  //Mark complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
    
  }

  addTodo = title => {
    axios
    .post("https://jsonplaceholder.typicode.com/todos",{
      
      title,
      completed: false
      
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
    

    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // };
    // this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {

    const reactApp = (props) => {
      return (
      <React.Fragment>
        <div className='container'>
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo}
        />
        </div>
      </React.Fragment>
      )
      
      
    }
    console.log(this.state.todos)
    return (
      <Router>
        
      <div className="App">
        <Header />
        
      <Routes>
        
        <Route exact path="/TODO-App-React" element={reactApp()}/>
        <Route path='/about' element={<About/>} />
        </Routes>
      </div>
      
      </Router>
    );
  }
}

export default App;
