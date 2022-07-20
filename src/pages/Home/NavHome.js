import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './NavHome.css';

export default function NavHome() {
  return (
    <nav className="nav-home">
      <div className="nav-head">
        <Logo />
      </div>
      <ul>
        <li>
          <Link to="/dashboard/app">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/user">User</Link>
        </li>
        <li>
          <Link to="/dashboard/products">Courses</Link>
        </li>
        <li>
          <Link to="/dashboard/blog">Blog</Link>
        </li>
        <li>
          <Link to="/dashboard/user">Login</Link>
        </li>
        <li>
          <Link to="/dashboard/user">Create an account</Link>
        </li>
      </ul>
    </nav>
  );
}
