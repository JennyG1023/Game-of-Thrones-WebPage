import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSingleBook } from '../store';

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchSingleBook()
  }

  render () {
    const { singleBook } = this.props;
    return (
      <div>
        <h3>Books</h3>
        {allBooks.map(book => {
          return (
            <div>{book.name}</div>
          )
        })}
        <BooksTable allBooksData={allBooks} singleBookData={singleBook}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    const singleBook = state.singleBook
    return({
      singleBook,
    })
  };
  
  const mapDispatchToProps = dispatch => { 
    return({
      fetchSingleBook: () => { 
        dispatch(fetchSingleBook()) 
      }
    });
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleBook));