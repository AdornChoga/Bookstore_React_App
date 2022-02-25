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
    const selected = e.target.options[e.target.selectedIndex];
    setInfo({ ...bookInfo, category: selected.value });
  };
  const setDisabled = (e) => {
    e.target.options[0].disabled = true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.bookTitle.trim() !== '' && bookInfo.category.trim() !== '') {
      const payloadData = {
        bookTitle: bookInfo.bookTitle,
        category: bookInfo.category,
        id: uuidv4(),
      };
      dispatch(addBook(payloadData));
    }
  };
  return (
    <section className="add-book-section">
      <hr />
      <h1 className="heading">ADD NEW BOOK</h1>
      <form className="add-book-form">
        <input type="text" placeholder="Book title" className="book-input" value={bookInfo.bookTitle} onChange={handleTitle} />
        <select className="book-category" onChange={handleCategory} onClick={setDisabled}>
          <option select="true">Category</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Finance">Finance</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit" className="submit-book" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default NewBookForm;
