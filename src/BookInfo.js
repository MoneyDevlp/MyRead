import React from "react";
import SelectControl from "./SelectControl";

function BookInfo(props) {
    const {book, updateBook} = props;

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks &&
                            book.imageLinks.thumbnail})`}}>
                    </div>
                    <div className="book-self-changer">
                        <SelectControl
                            book={book}
                            updateBook={updateBook}
                        />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.authors ? book.authors : "No author"}</div>
            </div>
        </li>
    )
}

export default BookInfo