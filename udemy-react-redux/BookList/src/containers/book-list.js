import React, { Component } from 'react';
// only importing the function connect from this package
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show up as
  // props inside BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // whenever select book is called, the result
  // should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// connect function says take this component, take
// this mapState function, and make a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
