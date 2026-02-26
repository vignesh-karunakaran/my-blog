/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

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
        <div>
          <Link href="/resume">
            Resume
          </Link>
        </div>
        <ThemeToggle />
      </div>
      </nav>
      <div className="main-body">{children}</div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>&copy; {new Date().getFullYear()} Vignesh Karunakaran</p>
            <p className="footer-tagline">Software Engineer | Frontend Specialist</p>
          </div>
          <div className="footer-section">
            <div className="footer-socials">
              <a href="https://wa.me/919840051399?text=Hi vicky" target="_blank" rel="noreferrer">
                <Image src="/whatsapp-logo.svg" alt="Whatsapp" width="24" height="24" />
              </a>
              <a href="https://www.linkedin.com/in/vignesh-karunakaran-4730039b/" target="_blank" rel="noreferrer">
                <Image src="/linkedin.svg" alt="linkedin" width="22" height="22" />
              </a>
              <a href="https://github.com/vignesh-karunakaran" target="_blank" rel="noreferrer">
                <Image src="/github.svg" alt="github" width="22" height="22" className="github-icon" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <p className="footer-made-with">Made with 💙 using Next.js</p>
          </div>
        </div>
      </footer>
    </>
  );
}
