import React from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookInfo from './BookInfo';

class SearchBook extends React.Component {

    state = {
        query: "",
        searchListResult: []
    }

    updateQuerySearch = (e) => {
        const query = e.target.value;

        this.setState({query}, async () => {
            let searchListResult = [];

            if(this.state.query !== "") {
                searchListResult = await BooksAPI.search(this.state.query);
            }

            if (query === this.state.query) {
                this.setState({ searchListResult });
            }
        })
    }

    render() {

        const { searchListResult } = this.state;

        const resultSearch = searchListResult.error ? (
            <p>Not found</p> 
        ): (searchListResult.map(book => {
            const Bookshelf = this.props.bookLists.find(({id}) => id === book.id);

            const shelf = Bookshelf ? Bookshelf.shelf : "none";

            return (
                <BookInfo key={book.id} book={{...book, shelf: shelf}} updateBook={this.props.updateBook} />
            );
        })
        );

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.updateQuerySearch}/>
                    </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">{resultSearch}</ol>
                </div>
            </div>
        )
    }


}

export default SearchBook