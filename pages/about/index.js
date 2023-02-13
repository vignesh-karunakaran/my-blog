/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="not-found">
        <div className="intro-card">
          <div className="profile-pic">
            <Image src="/me.jpg" alt="Picture of the author" width="150" height="150" />
          </div>
          <div className="profile-desc">
            <h2>Hello world, I am Vignesh Karunakaran</h2>
            <p>I work as a front-end developer at Zoho. Admirer of art and nature.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
