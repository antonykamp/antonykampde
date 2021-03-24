import "../styles/globals.css";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const customTheme = extendTheme({
  colors : {
    brand: {
      900: "#153351",
      800: "#273f5c",
      700: "#384c68",
      600: "#475a73",
      500: "#57677f",
      400: "#67758b",
      300: "#778398",
      200: "#8792a4",
      100: "#98a1b1",
      75: "#a8b0bd",
      50: "#cacfd7",
      25: "#dcdfe4",
      0: "#ffffff" 
    }
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          color: "brand.800",
          textShadow: "0.3px 0.3px brand.800",
          textDecoration: 'none'
        }
      },
      variants: {
        footerLink: {
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
