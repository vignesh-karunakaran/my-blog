/* eslint-disable max-len */
import React from 'react';
import Layout from '../../components/layout';
import noteList from './const';
import Link from 'next/link';

export default function Notes() {
  return (
    <Layout>
      <div>
      {noteList.map((element) => (
        <Link href={element.link}>
        <div className='note-container'>
            <p className='note-desc'>{element.desc} #</p>
            <ul className='note-tags'>
              {element.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
        </div>
        </Link>
      ))}
      </div>
    </Layout>
  );
}
