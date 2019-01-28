import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Header title='Header'/>
        </header>
        <sidebar className="App-sidebar">
            <Sidebar title='Sidebar'/>
        </sidebar>
        <content className="App-content">
            <Content title="Content"/>
        </content>
        <footer className="App-footer">
            <Footer title="Footer"/>
        </footer>
      </div>
    );
  }
}

export default App;
