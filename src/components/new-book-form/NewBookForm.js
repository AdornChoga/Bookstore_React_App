import './AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books';

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
    const payloadData = {
      bookTitle: bookInfo.bookTitle,
      category: bookInfo.category,
      id: uuidv4(),
    };
    dispatch(addBook(payloadData));
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
