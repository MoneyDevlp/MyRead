import React from "react";
import { shelves } from "./Shelves";

class SelectControl extends React.Component{

    updateStatusBook = (e) => {
        const bookObj = this.props.book;
        const shelf = e.target.value;

        if(this.props.updateBook) {
            this.props.updateBook(bookObj, shelf);
        }
    }
    render() {
        const {book} = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.updateStatusBook}>
                    <option value="move" disabled>Move to...</option>
                    {shelves.map(({id, title}) => (
                    <option key={id} value={id}>
                        {book.shelf === id && "\u2713 "}
                        {title}
                    </option>
                    ))}
                    <option value="none">
                        {book.shelf === "none" && "\u2713 "}
                        None
                    </option>
                </select>
            </div>
        )
    }
    

}

export default SelectControl