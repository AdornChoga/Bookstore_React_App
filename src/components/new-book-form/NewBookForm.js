import './AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/books';

const NewBookForm = () => {
  const [bookInfo, setInfo] = useState({ bookTitle: '', category: '' });
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setInfo({ ...bookInfo, bookTitle: e.target.value });
  };
  const handleCategory = (e) => {
    setInfo({ ...bookInfo, category: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADDBOOK,
      payload: {
        bookTitle: bookInfo.bookTitle,
        category: bookInfo.category,
        author: 'author: Author',
        progress: '0%',
        chapter: 'Introduction',
        id: Date.now(),
      },
    });
  };
  return (
    <div className="add-book-section">
      <hr />
      <h1>ADD NEW BOOK</h1>
      <form className="add-book-form">
        <input type="text" placeholder="Book title" className="book-input" value={bookInfo.bookTitle} onChange={handleTitle} />
        <input type="text" placeholder="Category" className="book-category" value={bookInfo.category} onChange={handleCategory} />
        <button type="submit" className="submit-book" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default NewBookForm;
