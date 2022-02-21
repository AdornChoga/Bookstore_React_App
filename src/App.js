import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Book from './components/book/Book';
import AddBook from './components/addbook/AddBook';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Book />
        <Book />
        <Book />
        <AddBook />
      </main>
    </>
  );
}

export default App;
