import React from 'react';
import Layout from '../../components/layout';
import noteList from '../../constants/noteList';
import Link from 'next/link';

export default function Notes() {
  return (
    <Layout>
      <div>
        {noteList.map((element) => (
          <Link href={element.link} key={element.desc}>
            <div className='note-container'>
              <ul className='note-tags'>
                {element.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className='note-title'>{element.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}