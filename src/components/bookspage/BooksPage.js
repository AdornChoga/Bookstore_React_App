import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { initializeState } from '../../redux/books';
import Book from '../book/Book';
import NewBookForm from '../new-book-form/NewBookForm';
import bookApp from '../../logic/local_storage';

const BooksPage = () => {
  const dispatch = useDispatch();
  const bookInfo = useSelector((state) => state.addRemoveBook);
  useEffect(async () => {
    const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
    if (!bookApp.fetchApp().appId) {
      const { data } = await axios.post(baseUrl);
      bookApp.setBookApp(data);
    }
    const { appId } = bookApp.fetchApp();
    const { data } = await axios.get(`${baseUrl}${appId}/books`);
    const books = Object.entries(data).map((book) => {
      const bookId = book[0];
      const [bookInfo] = book[1];
      return { ...bookInfo, id: bookId };
    });
    dispatch(initializeState(books));
  }, []);
  return (
    <main>
      {
        bookInfo.map((info) => (
          <Book key={Date.now()} bookInfo={info} />
        ))
      }
      <NewBookForm />
    </main>
  );
};

export default BooksPage;
