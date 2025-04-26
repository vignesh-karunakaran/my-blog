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
            Home
          </Link>
        </div>
        <div className='flex-column'>
        <div>
          <Link href="/notes">
            Notes
          </Link>
        </div>
        <div>
          <Link href="/about">
            About
          </Link>
        </div>
        </div>
      </nav>
      <div className="main-body">{children}</div>
      <footer className="footer">
        <p>Vignesh Karunakaran</p>
        <a href="https://wa.me/919840051399?text=Hi vicky">
          <Image src="/whatsapp-logo.svg" alt="Whatsapp" width="24" height="24" />
        </a>
        <a href="https://www.linkedin.com/in/vignesh-karunakaran-4730039b/" target="_blank">
          <Image src="/linkedin.svg" alt="linkedin" width="20" height="20" />
        </a>
      </footer>
    </>
  );
}
