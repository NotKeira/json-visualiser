import Head from "next/head";

import React from "react";
const SetHead: React.FC = () => {
  return (
    <Head>
      <title>JSON Web Visualiser</title>
      <meta name="description" content="JSON Web Visualiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SetHead;
