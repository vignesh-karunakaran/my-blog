/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function About() {
  return (
    <Layout>
      <div className="not-found">
        <div className="intro-card">
          <div className="profile-pic">
            <Image src="/me.jpg" alt="Picture of the author" width="150" height="150" />
          </div>
          <div className="profile-desc">
            <h2>Hello world, I am Vignesh Karunakaran</h2>
            {/* Updated the introductory sentence */}
            <p>
            I'm a Front-end developer with experience at companies like Zoho and currently working at Mphasis.
            I have a passion for creating web experiences and enjoy working with technologies like Next.js,
            React, and JavaScript. My interests extend beyond coding to the appreciation of art and the tranquility of nature.
            This blog is a space where I share my thoughts and knowledge on various topics, including web development, technology, and
            my personal insights. You can find notes on JavaScript, TypeScript, CSS, and more technical subjects, as well as my perspectives on spirituality.
            I aim to document my learning journey and share useful information and reflections. Feel free to connect with me on WhatsApp or LinkedIn using the links in the footer.
            Thank you for visiting my space!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}