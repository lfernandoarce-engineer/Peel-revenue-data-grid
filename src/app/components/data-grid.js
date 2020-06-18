import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPage } from '../actions'
const axios = require('axios').default

class DataGrid extends React.Component {
    constructor() {
        super();
     };
    
    
    componentWillMount() {
        //Perform API call
        fetch('http://app.peelinsights.com/api/test_stats/')
             .then((response) => {
                this.props.setPage(response.results.all);
        });

        fetch('http://app.peelinsights.com/api/test_stats/')
            .then(response => response.results.all.json())
            .then(data => this.props.setPage(data));
    }

    handlePageChanges = () => {
        // stateUpdated = store.getState()

        // if (this.state !== stateUpdated) {
        //     this.setState(stateUpdated)
        // }
    }

  

  render() {
    if(!this.props.revData) 
        return (<div></div>);

    return (
        <div>
        <table>
           <tbody>
              { this.props.revData.map((dayRev, i) => <TableRow key = {i} 
                                                    data = {dayRev} />) }
           </tbody>
        </table>
     </div>
    )
  }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.ds}</td>
                <td>{this.props.data.y}</td>
            </tr>
        );
    }      
}

DataGrid.propTypes = {
    revData: PropTypes.array,
    setPage: PropTypes.func
  }


const mapStateToProps = state => {
    return {
      revData: state.data
    };
  };

export default connect(mapStateToProps, setPage
)(DataGrid)