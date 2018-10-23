import React, { Component } from 'react';
import Coursesales from './Coursesales';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {

    var courses = [
        {name: 'complete react course',price : 199},
        {name: 'complete node course',price : 299},
        {name: 'complete express course',price : 399},
        {name: 'complete ios course',price : 299},
        {name: 'complete android course',price : 599},

    ]

    return (
      <div className="App">
          <Header/>
      <Coursesales items = {courses}/>
      </div>
    );
  }
}

export default App;
