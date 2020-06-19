import React from 'react';
import './data-grid.css';
import { connect } from 'react-redux';
import { setPage, appendPage } from '../../actions';
import Filters from './filters'
const axios = require('axios').default;

class DataGrid extends React.Component {
    componentWillReceiveProps(newProps) {    
        console.log(newProps);
     }
    
    componentWillMount = () => {
        axios.get('http://app.peelinsights.com/api/test_stats/',  { headers: { 
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"}})
              .then((response) => {
                this.props.appendPageDispath({count: response.data.count, 
                                            data: response.data.results.all,
                                            next_cursor: response.data.next_cursor,
                                            group_by: response.data.group_by});
        })
    }

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            if(!this.isGridScrollable()) {
                this.getNextPage();
            }
        }, 500);
    }

    isGridScrollable = () => {
        var gridDiv = document.getElementsByClassName("DataGrid")

        if(!gridDiv || gridDiv.length === 0) {
            return false;
        }

        if(gridDiv[0].clientHeight === gridDiv[0].scrollHeight) {
            return false;
        }

        return true;
    }

    getNextPage = () => {
        var groupBy = this.props.revData.group_by ? `&group_by=${this.props.revData.group_by}` : ''

        axios.get(`http://app.peelinsights.com/api/test_stats/?cursor=${this.props.revData.next_cursor}${groupBy}`,  
                    { headers: { "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"}})
                    .then((response) => {
                        this.props.appendPageDispath({count: response.data.count, 
                                                    data: response.data.results.all,
                                                    next_cursor: response.data.next_cursor, 
                                                    group_by: response.data.group_by});})
    };

    checkScrollLimit = (event) => {
        var gridDiv = event.target
        
        if(gridDiv && this.isScrollAtBottom(gridDiv)) {
            this.getNextPage();
        }
    }

    isScrollAtBottom = (gridDiv) => {
        var maxScrollTop = gridDiv.scrollHeight - gridDiv.clientHeight;
        return maxScrollTop <= gridDiv.scrollTop;
    }

    filterData = (filter) => {
        axios.get(`http://app.peelinsights.com/api/test_stats/${filter}`,  { headers: { 
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT"}})
              .then((response) => {
                this.props.setPageDispatch({count: response.data.count, 
                                            data: response.data.results.all,
                                            next_cursor: response.data.next_cursor, 
                                            group_by: response.data.group_by});
        })
    }

    groupDataBy = (grouping) => {
        var groupBy = ""
        var groupByOptions = ['week', 'month', 'quarter'];

        if(groupByOptions.includes(grouping)) {
           groupBy = `?group_by=${grouping}` 
        }

        this.filterData(groupBy)
    }
    
    render() {
        return (
            this.props.revData !== undefined && Array.isArray(this.props.revData.data) ? 
            <div className="DataGrid" onScroll={this.checkScrollLimit}>
                <Filters groupBy={this.groupDataBy}></Filters>
                { this.props.revData.data.map((dayRev, i) => <TableRow key={i} 
                                        data={dayRev} />) }  
            </div> 
        : <div></div>
        );
    }
};

class TableRow extends React.Component {
    render() {
         return (
            <div className="TableRow" style={{"display": "flex", "flexDirection": "row", "justifyContent": "space-between"}}>
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
            <div style={{"display": "flex", "flexDirection": "column", "alignItems": "baseline" }}>
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
    setPageDispatch: setPage, 
    appendPageDispath: appendPage
}

export default connect(mapStateToProps, mapDispatchToProps
)(DataGrid)