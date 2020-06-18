import React from 'react';
import './grid-header.css';


class GridHeader extends React.Component {
  constructor() {
    super();
    
    this.state = {
       data: []
    }
 };

  render() {
        return (
        <div className="HeaderContainer" style={{"display": "flex", "flexDirection": "column"}}>
          <span className="Header">{this.props.header}</span>
          <span className="SubHeader">{this.props.subHeader}</span>
        </div>
      );
  }
}

export default GridHeader
