import React, { Component } from 'react';
import BooksTable from './booksTable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBooks } from '../store';

class Books extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render () {
    const { allBooks } = this.props;
    return (
      <div>
        <h3>Books</h3>
        <BooksTable allBooksData={allBooks} 
        // singleBookData={singleBookData}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const allBooks = state.allBooks
  return({
    allBooks: allBooks,
  })
};

const mapDispatchToProps = dispatch => { 
  return({
    fetchBooks: () => { 
      dispatch(fetchBooks()) 
    }
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Books));