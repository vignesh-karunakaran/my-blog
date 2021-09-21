/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <>
      <nav className="top-band">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <a href="https://www.mypcethics.tk" target="_blank" rel="noopener noreferrer">Team blog</a>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </nav>
      <div className="main-body">{children}</div>
      <footer className="footer">
        <p> 2019 - 2021 © vignesh</p>
        <Image src="/portal-gun.png" alt="Portal Gun" width="30" height="30" />
      </footer>
    </>
  );
}
