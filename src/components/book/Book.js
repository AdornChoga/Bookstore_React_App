import './Book.css';

const Book = () => (
  <div className="books-container">
    <ul>
      <li>Action</li>
      <li>The Hunger Games</li>
      <li>Suzanne Collins</li>
      <li className="book-operations">
        <p>Comments</p>
        <p>Remove</p>
        <p>Edit</p>
      </li>
    </ul>
    <div className="progress-and-chapter">
      <ul className="progress">
        <li>Photo</li>
        <li>
          <span>64%</span>
          <br />
          <span>Completed</span>
        </li>
      </ul>
      <ul>
        <li>Current Chapter</li>
        <li>Chapter 17</li>
        <li>
          <button type="button" className="update-progress">Update Progress</button>
        </li>
      </ul>
    </div>
  </div>
);

export default Book;
