//They bring in components and styles needed to build and style the homepage.
import Head from 'next/head';

// Imports the Layout component for consistent page structure and the siteTitle variable for setting the page title.
import Layout, { siteTitle } from '../components/layout';

// Imports utility CSS module styles for use in this page (such as headings and spacing).
import utilStyles from '../styles/utils.module.css';

// Imports alert-specific styles and the clsx utility for conditional class names (though not used in this file).
import styles from '../styles/alert.module.css';

// Imports the clsx utility, which is used to conditionally join CSS class names together.
import { clsx } from 'clsx';
 
//It creates and styles the homepage, showing an introduction and a tutorial link.
export default function Home() {
  return (

    // Renders the homepage layout with a title and introduction section.
   // Displays the site title in the browser tab and a welcome message with a link to the Next.js tutorial.
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Melanie! And I am a CS major.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}