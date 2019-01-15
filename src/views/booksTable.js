import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSingleBook } from '../store';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


const mainColumns = [
  {
    Header: "Books",
    columns: [
      {
        Header: "Title",
        accessor: "name",
        filterable: false
      }
    ]
  },
  {
    Header: "More Information",
    columns: [
      {
        Header: "Released Date",
        id: "released",
        accessor: d => d.released.slice(0,10) ,
      },
      {
        Header: "Number of Pages",
        accessor: "numberOfPages",
      }
    ]
  }
];


const subComponentColumns = [
  {
    Header: "More Information",
    columns: [
      {
        Header: "ISBN",
        accessor: "isbn",
        filterable: false
      },
      {
        Header: "Authors",
        id: "authors",
        accessor: d => d.authors.join(),
        filterable: false
      },
      {
        Header: "Publisher",
        accessor: "publisher",
        filterable: false
      },
      {
        Header: "Country",
        accessor: "country",
        filterable: false
      },
      {
        Header: "Media Type",
        accessor: "mediaType",
        filterable: false
      },
      {
        Header: "Number of Characters",
        id: "characters",
        accessor: d => d.povCharacters.length,
        filterable: false
      },
      {
        Header: "Number of Pov Characters",
        id: "povCharacters",
        accessor: d => d.povCharacters.length,
        filterable: false
      },
    ]
  },
];

class BooksTable extends Component {
  constructor(props) {
      super(props)
      this.state = {
         
      }
  }

  componentDidMount() {
    this.props.fetchSingleBook()
  }

  render() {
    const { allBooksData, fetchSingleBook } = this.props;
      return (
        <div>
          <ReactTable
            data={allBooksData}
            columns={mainColumns}
            defaultPageSize={5}
            pivotBy={["name"]}
            filterable
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, fetchSingleBook ) => {
                  fetchSingleBook(rowInfo);
                }
              }
            }}
            SubComponent={row => {
              return (
                <div style={{ padding: "20px" }}>
                  <ReactTable
                    data={ allBooksData }
                    columns={subComponentColumns}
                    defaultPageSize={1}
                    showPagination={false}
                  />
                </div>
              );
            }}
          />
          <br />
        </div>
      );
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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BooksTable));