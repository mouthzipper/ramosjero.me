import Head from "next/head";
import { Box, Text, Link, Flex } from "rebass";
import TitleAndMetaTags from "components/TitleAndMetaTags";
const Home = () => (
  <>
    <a className="skip-link" href="#maincontent">
      Skip to main
    </a>
    <TitleAndMetaTags />
    <main id="maincontent" role="main">
      <Box
        p={[4, 5, 6]}
        bg="white"
        color="#4B4B4B"
        width={["80%", "70%", "70%"]}
      >
        <Text mb={100} fontSize={18} mr={10} as="h1">
          JEROME<span className="super">RAMOS</span> 👋
        </Text>

        <Text mb={50} fontSize={24} color="#131315">
          I’m a JavaScript Engineer with over 8 years of professional experience
          currently hooked with React and Node. Interested in jamstack,
          serverless and user experience.
        </Text>
        <Text mb={50} fontSize={24} color="#131315">
          Born in the Philippines and is working remotely. A digital Nomad since
          2018 hoping to travel to a different country soon 🙏
        </Text>
        <Flex>
          <Text fontSize={24} as="p" color="#131315">
            You can find me on
            <Link
              href="https://twitter.com/mouthzipperio"
              ml={"5px"}
              color="#595959"
              target="_blank"
              rel="noopener"
            >
              twitter
            </Link>
            ,
            <Link
              href="https://github.com/mouthzipper"
              ml={"5px"}
              color="#595959"
              target="_blank"
              rel="noopener"
            >
              github
            </Link>{" "}
            or
            <Link
              href="https://www.linkedin.com/in/jeromeramos/"
              ml={"5px"}
              color="#595959"
              target="_blank"
              rel="noopener"
            >
              linkedin
            </Link>
            .
          </Text>
        </Flex>
      </Box>
    </main>
    <style jsx>
      {`
        .super {
          color: #000;
          margin-left: 10px;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          padding: 8px;
          z-index: 100;
        }

        .skip-link:focus {
          top: 0;
        }
      `}
    </style>
  </>
);

export default Home;
