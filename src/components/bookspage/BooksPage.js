import { useSelector } from 'react-redux';
import Book from '../book/Book';
import NewBookForm from '../new-book-form/NewBookForm';

const BooksPage = () => {
  const bookInfo = useSelector((state) => state);
  return (
    <main>
      {
        bookInfo.map((info) => (
          <Book key={info.id} bookInfo={info} />
        ))
      }
      <NewBookForm />
    </main>
  );
};

export default BooksPage;
