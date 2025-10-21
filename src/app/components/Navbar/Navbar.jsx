'use client';
import './Navbar.css';
import  Link  from 'next/link';

export const Navbar = () => {
  return (
    <div>
      <header className="module">
        <h1>My Website</h1>
        <ul className="menu">
          <li>
              <Link href='/'>Home</Link>
          </li>
          <li>
              <Link href='/not_home'>Not Home</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

