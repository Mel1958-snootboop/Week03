import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';


//It creates a simple blog post page with a title, a loaded external script, and a navigation link.
export default function FirstPost() {
  return (
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
      />
      <h1>First Post</h1>
      <img src="/images/profile.jpg" alt="Your Name" />
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}