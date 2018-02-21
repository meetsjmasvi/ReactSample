import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {

    render() {
        if(!this.props.book) {
         return <div>Please select a book to display</div>
        }

        return(
            <div>title: {this.props.book.title}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);