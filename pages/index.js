import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Good day everyone! I would like to introduce myself. My name is Jewel Marie P.  Ocampo. I am 20 years old and was born on September 20, 2002. I was born in Arayat but I live in San Luis Pampanga. I like going to the beach and taking pictures of the sunset. My favorite music as of now is “would u cry '' by settbaby. My all time favorite food is donuts. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}