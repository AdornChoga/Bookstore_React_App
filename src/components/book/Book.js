import './Book.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { bookInfo } = props;
  const {
    bookTitle, category, author, progress, chapter, id,
  } = bookInfo;

  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className="books-container" key={id}>
      <ul>
        <li id="category">{category}</li>
        <li id="title">{bookTitle}</li>
        <li id="author">{author}</li>
        <li className="book-operations">
          <p>Comments</p>
          <button type="button" className="remove-book" onClick={handleRemove}>Remove</button>
          <p>Edit</p>
        </li>
      </ul>
      <div className="progress-and-chapter">
        <ul className="progress">
          <li>Photo</li>
          <li>
            <span>{progress}</span>
            <br />
            <span>Completed</span>
          </li>
        </ul>
        <ul>
          <li>Current Chapter</li>
          <li>{chapter}</li>
          <li>
            <button type="button" className="update-progress">Update Progress</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
