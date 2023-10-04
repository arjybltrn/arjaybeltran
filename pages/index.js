import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Bio from '../components/Bio';
import Resume from '../components/Resume';
import Head from 'next/head';
import '../public/styles.css';
import UnderConstruction from '../components/UnderConstruction';

export default function Home() {
  return (
   
    <div className='index'>
      <Head>
        <title>Arjay Beltran</title>
        <link rel="icon" href="/images/ab1.png" />
      </Head>
      <Layout>
        <div className='container'>
          {/* bio */}
          <section id='bio' className='section'>
            <Bio />
          </section>

          {/* projects */}
          <section id='projects' className='section'>
            <h2 className='title'>Projects</h2>
            <Projects />
          </section>

          {/* resume */}
          <section id='resume' className='section'>
            <h2 className='title'>Experience</h2>
            <Resume />
          </section>
        </div>
      </Layout>
    </div>
  )
}
