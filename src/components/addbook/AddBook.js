import './AddBook.css';

const AddBook = () => (
  <div className="add-book-section">
    <hr />
    <h1>ADD NEW BOOK</h1>
    <form className="add-book-form">
      <input type="text" placeholder="Book title" className="book-input" />
      <select className="book-category">
        <option select>Category</option>
      </select>
      <button type="submit" className="submit-book">Add Book</button>
    </form>
  </div>
);

export default AddBook;
