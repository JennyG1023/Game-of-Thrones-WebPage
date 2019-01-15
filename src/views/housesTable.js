import React, { Component } from 'react';
import _ from "lodash";
import axios from 'axios';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const mainColumns = [
  {
    Header: "Noble Houses",
    columns: [
      {
        Header: "Name",
        accessor: "name",
      }
    ]
  },
  {
    Header: "More Information",
    columns: [
      {
        Header: "Region",
        accessor: "region",
      }
    ]
  }
];


const subComponentColumns = [
  {
    Header: "More Information",
    columns: [
      {
        Header: "Coat if Arms",
        accessor: "coatOfArms",
        filterable: false
      },
      {
        Header: "Words",
        accessor: "words",
        filterable: false
      },
      {
        Header: "Titles",
        id: "titles",
        accessor: d => d.titles.join(),
        filterable: false
      },
      {
        Header: "Seats",
        id: "seats",
        accessor: d => d.seats.join(),
        filterable: false
      },
      {
        Header: "Current Lord",
        accessor: "currentLord",
        filterable: false
      },
      {
        Header: "Founded",
        accessor: "founded",
        filterable: false
      },
      {
        Header: "Founder",
        accessor: "founder",
        filterable: false
      },
      {
        Header: "Died Out",
        accessor: "diedOut",
        filterable: false
      },
      {
        Header: "Ancestral Weapons",
        id: "ancestralWeapons",
        accessor: d => d.ancestralWeapons.join(),
        filterable: false
      },
      {
        Header: "Cadet Branches",
        id: "cadetBranches",
        accessor: d => d.cadetBranches.join(),
        filterable: false
      },
      {
        Header: "Sworn Members",
        id: "swornMembers",
        accessor: d => d.swornMembers.join(),
        filterable: false
      },
    ]
  },
];

const fetchSingleBook = (bookURL) => {
  return async () => {
      const res = await axios.get(bookURL);
      const data = res.data;
  }
}

class HousesTable extends Component {
    constructor() {
        super()
        this.state = {
            selectedHouse : ''
        }
    }

    
    render() {
        const { allHousesData } = this.props;
          return (
            <div>
              <ReactTable
                data={allHousesData}
                columns={mainColumns}
                defaultPageSize={5}
                pivotBy={["name"]}
                filterable
                SubComponent={row => {
                  return (
                    <div style={{ padding: "20px" }}>
                      <ReactTable
                        data={ allHousesData }
                        columns={subComponentColumns}
                        defaultPageSize={1}
                        pivotBy={["swornMembers"]}
                        showPagination={false}
                        SubComponent={row => {
                          return (
                            <div style={{ padding: "20px" }}>
                              <ReactTable
                                data={ allHousesData }
                                columns={subComponentColumns}
                                defaultPageSize={1}
                                showPagination={false}
                              />
                            </div>
                          );
                        }}
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

export default HousesTable;