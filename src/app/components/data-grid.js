import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions';
const axios = require('axios').default;

class DataGrid extends React.Component {
    componentWillReceiveProps(newProps) {    
        console.log(newProps);
     }
    
    componentWillMount = () => {
        axios.get('http://app.peelinsights.com/api/test_stats/',  { headers: { 
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"}})
              .then((response) => {
                this.setState({data: response.data.results.all});
                this.props.setPageDispatch(response.data.results);
        })
    };
    
    render() {
        return (
            this.props.revData !== undefined && Array.isArray(this.props.revData.all) ? 
            <div>
                <table>
                    <tbody>
                        { this.props.revData.all.map((dayRev, i) => <TableRow key = {i} 
                                                    data = {dayRev} />) }  
                    </tbody>
                </table>
            </div> 
        : <div></div>
        );
    }
};

function TableRow(props){
    return (
        <tr>
            <td>{props.data.ds}</td>
            <td>{props.data.y}</td>
        </tr>
    );
};

const mapStateToProps = state => {
    return {
      revData: state.revenue
    };
};

const mapDispatchToProps = {
    setPageDispatch: setPage
}

export default connect(mapStateToProps, mapDispatchToProps
)(DataGrid)