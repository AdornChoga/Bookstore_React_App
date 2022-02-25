import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { bookInfo } = props;
  const {
    title, category, id,
  } = bookInfo;

  const { author, progress, chapter } = {
    author: 'author: Author',
    progress: '0%',
    chapter: 'Introduction',
  };
  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className="books-container" key={Date.now()}>
      <ul key={Date.now()}>
        <li key={Date.now()} id="category">{category}</li>
        <li key={Date.now()} id="title">{title}</li>
        <li key={Date.now()} id="author">{author}</li>
        <li key={Date.now()} className="book-operations">
          <p key={Date.now()}>Comments</p>
          <button key={Date.now()} type="button" className="remove-book" onClick={handleRemove}>Remove</button>
          <p key={Date.now()}>Edit</p>
        </li>
      </ul>
      <div className="progress-and-chapter" key={Date.now()}>
        <ul className="progress" key={Date.now()}>
          <li key={Date.now()}>Photo</li>
          <li key={Date.now()}>
            <span key={Date.now()}>{progress}</span>
            <br />
            <span key={Date.now()}>Completed</span>
          </li>
        </ul>
        <ul>
          <li key={Date.now()}>Current Chapter</li>
          <li key={Date.now()}>{chapter}</li>
          <li key={Date.now()}>
            <button key={Date.now()} type="button" className="update-progress">Update Progress</button>
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
