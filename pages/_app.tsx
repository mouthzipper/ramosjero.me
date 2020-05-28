import { AppProps } from 'next/app';
import Head from 'next/head';
import { Flex, Box} from 'rebass';
import Footer from 'components/Footer';
import { useAnalytics } from 'utils/analytics';



function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  return (
    <>
        <Head>
          <title>Jerome Ramos</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Flex flexDirection="column">
          <Box>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Flex>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </>
  );
}

export default App;