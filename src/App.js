import React from 'react';
import './App.css';
import DataGrid from './app/components/data-grid';
import GridHeader from './app/components/grid-header/grid-header';
import CompanyBrand from './app/components/company-brand/company-brand';
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
          <CompanyBrand></CompanyBrand>
          <div className="GridContainer">
            <GridHeader header="Revenue Data" subHeader="Showing all data"></GridHeader>
            <DataGrid/>  
          </div>
          
        </div>
      );
  }
}



export default connect()(App);
