import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: props.currentPage,
    };
  }

  handleClick = (e, index) => {
    e.preventDefault();
    this.setState({
      currentPage: index,
    });
  };

  render() {
    const { pageSize, pageCount, data } = this.props;
    const { currentPage } = this.state;

    let pageNumbers = [];
    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <PaginationItem key={i} active={currentPage === i ? true : false}>
          <PaginationLink disabled>{i + 1}</PaginationLink>
        </PaginationItem>
      );
    }
    const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    return (
      <>
        {paginatedData.map((data, i) => (
          <div key={i}>
            <p style={{ fontWeight: 'bold', marginTop: '25px' }}>{data.header}</p>
            <p>{data.date}</p>
            <p>{data.message}</p>
          </div>
        ))}

        <>
          <Pagination aria-label='Page navigation' style={{ marginTop: '29px' }}>
            <PaginationItem>
              <PaginationLink disabled previous />
            </PaginationItem>
            {pageNumbers}

            <PaginationItem disabled>
              <PaginationLink disabled next />
            </PaginationItem>
          </Pagination>
        </>
      </>
    );
  }
}

export default Paginate;
