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
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </nav>
      <div className="main-body">{children}</div>
      <footer className="footer">
        <p> 2019 - 2021 © vignesh</p>
        <a href="https://wa.me/919840051399?text=Hi vicky">
          <Image src="/whatsapp-logo.svg" alt="Whatsapp" width="30" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/vignesh-karunakaran-4730039b/" target="_blank">
          <Image src="/linkedin.svg" alt="linkedin" width="25" height="25" />
        </a>
      </footer>
    </>
  );
}
