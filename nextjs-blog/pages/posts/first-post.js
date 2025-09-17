// Imports the Next.js Head component, which lets you modify the HTML <head> (like setting the page title or meta tags) for this page.
import Head from 'next/head';

// Imports the Next.js Script component, which allows you to load and manage external JavaScript scripts on the page.
import Script from 'next/script';

// Imports the Next.js Link component, which enables client-side navigation between pages in the app.
import Link from 'next/link';

// Imports utility styles and the Layout component for consistent page structure and styling.
import utilStyles from '../../styles/utils.module.css';

// Imports the Layout component, which provides consistent structure and styling for the page.
import Layout from '../../components/layout';


//It creates a simple blog post page with a title, a loaded external script, and a navigation link.
export default function FirstPost() {
  return (
    
    // Sets the page title to "First Post" and loads the Facebook SDK script lazily.
   // When the script finishes loading, it logs a message to the console.
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
       
       // Renders the main content of the post: a heading, a profile image, and a link to navigate back to the homepage.
      />
      <h1>First Post</h1>
      <img src="/images/profile.jpg" alt="Your Name" />
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}