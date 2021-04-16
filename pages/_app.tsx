import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
