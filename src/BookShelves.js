import React from 'react'
import BookInfo from './BookInfo';
import PropTypes from 'prop-types';

function BookShelves(props) {
    const {bookLists, shelves, updateBook} = props;

    return (
        <div className="list-books-content">
            <div>
                {shelves.map(shel => (
                    <div className="bookshelf" key={shel.id}>
                        <h2 className="bookshelf-title" style={{color: "darkblue"}}>{shel.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookLists.map(book => book.shelf === shel.id && (
                                    <BookInfo 
                                        key={book.id}
                                        book={book}
                                        updateBook={updateBook}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

BookShelves.propTypes = {
    shelves: PropTypes.array.isRequired,
    bookLists: PropTypes.array.isRequired
};

export default BookShelves;