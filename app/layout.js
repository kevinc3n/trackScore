import React from 'react';
import Head from 'next/head';
import Navbar from '/components/navbar';

export const metadata = {
  title: 'trackScore. - An Easy Way to Rate Music.',
  description: 'Music Rating Site.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/trackscore/styles/globals.css" as="style"/>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
