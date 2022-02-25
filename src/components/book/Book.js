import './Book.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books';

const Book = (props) => {
  const [progress] = useState({ progressValue: 64 });
  const dispatch = useDispatch();
  const { bookInfo } = props;
  const {
    title, category, id,
  } = bookInfo;

  const { author, chapter } = {
    author: 'author here',
    completed: '0%',
    chapter: 'Chapter 17',
  };
  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className="books-container">
      <div>
        <div className="main-info">
          <p id="category">{category}</p>
          <h1 id="title">{title}</h1>
          <p id="author">{author}</p>
        </div>
        <div className="book-operations">
          <button type="button" className="comments">Comments</button>
          <button type="button" className="remove-book" onClick={handleRemove}>Remove</button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress-and-chapter">
        <ul className="progress-scale">
          <li className="progress-bar">
            <CircularProgressbar value={progress.progressValue} />
          </li>
          <li>
            <span id="percentage">{`${progress.progressValue}%`}</span>
            <br />
            <span id="completed">Completed</span>
          </li>
        </ul>
        <ul className="progress">
          <li id="current-chapter">CURRENT CHAPTER</li>
          <li id="chapter">{chapter}</li>
          <li>
            <button type="button" className="update-progress">UPDATE PROGRESS</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
