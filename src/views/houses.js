import React, { Component } from 'react';
import HousesTable from './housesTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchHouses } from '../store';

class Houses extends Component {
  componentDidMount() {
    this.props.fetchHouses()
  }

  render () {
    const { allHouses } = this.props;
    return (
      <div>
        <h3>Houses</h3>
        <HousesTable allHousesData={allHouses} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const allHouses = state.allHouses
  return({
    allHouses 
  })
};

const mapDispatchToProps = dispatch => { 
  return({
    fetchHouses: () => { 
      dispatch(fetchHouses()) 
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Houses));