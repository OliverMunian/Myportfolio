import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
        <title>Olivier Malahel</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
