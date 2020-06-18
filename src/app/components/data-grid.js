import React from 'react';
import './data-grid.css';
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
                this.props.setPageDispatch({count: response.data.count, 
                                            data: response.data.results.all,
                                            next_cursor: response.data.next_cursor });
        })
    };
    
    render() {
        return (
            this.props.revData !== undefined && Array.isArray(this.props.revData.data) ? 
            <div className="DataGrid">
                { this.props.revData.data.map((dayRev, i) => <TableRow key={i} 
                                        data={dayRev} />) }  
            </div> 
        : <div></div>
        );
    }
};

class TableRow extends React.Component {
    render() {
        var style = {
            "display": "flex", 
            "flexDirection": "row", 
            "justifyContent": "space-between", 
            "border-bottom": "solid lightgray 1px",
            "padding": "21px 31px 21px 31px" };

        return (
            <div style={style}>
                <RevenueDate date={this.props.data.ds} revenueType="Overall"></RevenueDate>
                <RevenueAmount amount={this.props.data.y}></RevenueAmount>
            </div>
        )
    };
};

class RevenueAmount extends React.Component {
    render() {
        return (
            <div>
                <span className="font-size-medium font-weight-bold">{this.props.amount}</span>
            </div>
        )
    };
}


class RevenueDate extends React.Component {
    render() {
        const date = new Date(this.props.date)
        var isToday = date.getMilliseconds() === (new Date()).getMilliseconds()
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
        const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date) 
        
        var displayDate = <span className="font-size-medium font-weight-light">{`${month} ${day}, ${year}`}</span>;
        
        if(isToday) {
            displayDate = <span className="font-size-medium font-weight-bold">Today</span>
        }

        return (
            <div style={{"display": "flex", "flexDirection": "column", "align-items": "baseline" }}>
                {displayDate}
                <span className="font-size-small font-weight-normal">{this.props.revenueType}</span>
            </div>
    );
    }
}

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