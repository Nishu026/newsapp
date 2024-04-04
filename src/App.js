import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_API
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News country="in" apiKey={this.apiKey} category="general"/>}/>
            <Route exact path="/business" element={<News  country="in" apiKey={this.apiKey} category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment"  country="in" apiKey={this.apiKey} category="entertainment"/>}/>
            <Route exact path="/general" element={<News key="general"  country="in"apiKey={this.apiKey} category="general"/>}/>
            <Route exact path="/health" element={<News key="health"  country="in" apiKey={this.apiKey} category="health"/>}/>
            <Route exact path="/science" element={<News key="science" country="in" apiKey={this.apiKey} category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports"  country="in" apiKey={this.apiKey} category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology"  country="in" apiKey={this.apiKey} category="technology"/>}/>
          </Routes>
        {/* <News/> */}
        </Router>
      </div>
      
    )
  }
}

