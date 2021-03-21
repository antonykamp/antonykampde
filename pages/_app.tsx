import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _hover: {
          color: "#153351",
          textShadow: "0.3px 0.3px #153351",
          textDecoration: 'none'
        }
      },
      variants: {
        darkLinkStyle: {
          _hover: {
            color: "white",
            textShadow: "0.3px 0.3px white",
            textDecoration: 'none'
          }
        }
      }
      
    }
  }
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
