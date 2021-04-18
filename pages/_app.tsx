import "../styles/globals.css";
import { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Antony Kamp, Developer, Project, Contribution, Science, HPI, Potsdam, Jena"
        />
        <meta name="author" content="Antony Kamp" />
        <meta name="copyright" content="Antony Kamp" />
      </Head>
      <Header />
      <Component {...pageProps} />      
      <Footer />
    </div>
  );
}

export default App;
