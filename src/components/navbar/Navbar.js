import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      title: 'BOOKS',
    },
    {
      id: 2,
      path: 'categories',
      title: 'CATEGORIES',
    },
  ];
  return (
    <header>
      <nav>
        <ul>
          <li>BookStore CMS</li>
          {
          navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.title}
              </NavLink>
            </li>
          ))
        }
          <li className="profile"><FaRegUserCircle /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
