import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={ () => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            )
        });
    }
    render() {
        return(
            <ul className="list-group col-md-4">
            {this.renderList()}
        </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned wil show up as
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// in the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook : selectBook} , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);