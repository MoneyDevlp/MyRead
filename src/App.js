import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves';
import SearchBook from './SearchBook';
import { shelves } from './Shelves';
import './App.css'

class BooksApp extends React.Component {
  state = {
    bookLists: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookLists) => {
      this.setState(() => (
        {bookLists}
      ));
    })
    
  }

  updateBook = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    this.setState(({bookLists}) => {
      let updateBookList = bookLists.filter(({id}) => id !== book.id);

      if(shelf !== "none") {
        updateBookList = updateBookList.concat({...book, shelf});
      }
      return {bookLists: updateBookList}
    })
  }
  
  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MY READS</h1>
              </div>
              <BookShelves 
                shelves={shelves}
                bookLists={this.state.bookLists}
                updateBook={this.updateBook}
              />
              <div className="open-search">
                  <Link to="/search">
                    <button className='btn-open_search'>Add a book</button>
                  </Link>
              </div>
            </div>
          } />

          <Route path="/search" element={
            <SearchBook
              bookLists={this.state.bookLists}
              updateBook={this.updateBook}
            ></SearchBook>
          } />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
