import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Book from '../book/Book';
import NewBookForm from '../new-book-form/NewBookForm';
import bookApp from '../../logic/local_storage';

const BooksPage = () => {
  const bookInfo = useSelector((state) => state.addRemoveBook);
  useEffect(async () => {
    const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
    if (!bookApp.fetchApp().appId) {
      const { data } = await axios.post(baseUrl);
      bookApp.setBookApp(data);
    }
  }, []);
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
