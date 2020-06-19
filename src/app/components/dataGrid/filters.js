import React from 'react';
import './filters.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

class Filters extends React.Component {

  handleFilterChange = (event, filter) => {
    this.props.groupBy(filter)
  }
  render() {
        return (
          <ToggleButtonGroup
            exclusive
            onChange={this.handleFilterChange}
            aria-label="Group By"
          >
            <ToggleButton value="" aria-label="Group By Day">Daily</ToggleButton>
            <ToggleButton value="week" aria-label="Group By Week">Weekly</ToggleButton>
            <ToggleButton value="month" aria-label="Group By Month">Monthly</ToggleButton>
            <ToggleButton value="quarter" aria-label="Group By Quarter">Quarterly</ToggleButton>
          </ToggleButtonGroup>
      );
  }
}

export default Filters
