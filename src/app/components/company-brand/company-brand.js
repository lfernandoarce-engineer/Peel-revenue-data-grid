import React from 'react';
import './company-brand.css';


class CompanyBrand extends React.Component {
  constructor() {
    super();
    
    this.state = {
       data: []
    }
 };

  render() {
        return (
        <div className="CompanyBrandContainer" style={{"display": "flex", "flexDirection": "row", "justifyContent": "space-between"}}>
            <div className="Logo"></div>
            <span className="Header" style={{"display": "flex", "alignItems": "center"}}>Frontend challenge</span>
            <MadeBy author="Phillipe Casorla"></MadeBy>
        </div>
      );
  }
}


class MadeBy extends React.Component {
    constructor() {
      super();
      
      this.state = {
         data: []
      }
   };
  
    render() {
          return (
          <div className="MadeByContainer" style={{"display": "flex", "flexDirection": "row"}}>
              <div style={{"display": "flex", "flexDirection": "column"}}>
                  <span className="MadeBy">Made By</span>
                  <span className="Author">{this.props.author}</span>
              </div>
              <div className="ProfileImage">
              </div>
          </div>
        );
    }
  }

export default CompanyBrand
