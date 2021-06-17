import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <nav className="top-band">
        <div>
          <Link href="/">
            <a href>Home</a>
          </Link>
        </div>
        <div>
          <a href="https://www.mypcethics.com" target="_blank" rel="noopener noreferrer">Team blog</a>
          <Link href="/about">
            <a href>About</a>
          </Link>
        </div>
      </nav>
      <div className="main-body">{children}</div>
      <footer className="footer">
        <p> 2019 - 20XX © vignesh</p>
      </footer>
    </>
  );
}
