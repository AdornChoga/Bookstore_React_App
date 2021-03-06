import './Views.css';
import { Routes, Route } from 'react-router-dom';
import BooksPage from '../components/bookspage/BooksPage';
import CategoriesPage from '../components/categories-page/CategoriesPage';

/* eslint-disable react/jsx-key */

const View = () => (
  <Routes>
    <Route index element={<BooksPage />} />
    <Route path="/">
      <Route path="categories" element={<CategoriesPage />} />
    </Route>
  </Routes>
);

export default View;
