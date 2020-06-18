import React from 'react';
import './App.css';
import DataGrid from './app/components/data-grid';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
       data: []
    }
 };

  render() {
        return (
        <div className="App">
          <DataGrid/>
        </div>
      );
  }
}



export default connect()(App);
