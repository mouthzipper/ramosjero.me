import Head from 'next/head'
import { Box, Text, Link, Flex } from 'rebass';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
const Home = () => (
  <>
    <a className="skip-link" href="#maincontent">Skip to main</a>
    <TitleAndMetaTags/>
    <main id="maincontent">
      <Box p={[4, 5, 6]} bg="white" color="#4B4B4B" width={['80%', '70%', '70%']}>
        <Text mb={100} fontSize={18} mr={10} as="h1">JEROME<span className="super">RAMOS</span></Text>
        
        <Text mb={50} fontSize={20}>I’m a JavaScript Engineer currently hooked with React and Node. Interested in jamstack, serverless and user experience.</Text>
        <Text mb={50} fontSize={20}>Currently working at <Link href="https://crediblemind.com" rel="noopener noreferrer" color="#595959" target="_blank">CredibleMind</Link> helping people find curated resources for mental and spritual health. As a side gig, I'm also working as Lead FrontEnd Engineer at <Link href="https://scaped.com" rel="noopener noreferrer" color="#595959" target="_blank">Scaped</Link> and <Link href="https://hauled.com" rel="noopener noreferrer" color="#595959" target="_blank">Hauled</Link>.</Text>
        <Text mb={50} fontSize={20}>Born in the Philippines and is working remotely. I’m an NPA(No Permanent Address) since 2018 hopping from country to country that accepts my passport 😅</Text>
        <Flex>
        <Text fontSize={20} as="p">You can find me on
          <Link href="https://twitter.com/mouthzipperio" ml={'5px'} color="#595959" target="_blank" rel="noopener">
            twitter
          </Link>,
          <Link href="https://github.com/mouthzipper" ml={'5px'} color="#595959" target="_blank" rel="noopener">
            github
          </Link> or 
          <Link href="https://www.linkedin.com/in/jeromeramos/" ml={'5px'} color="#595959" target="_blank" rel="noopener">
            linkedin
          </Link>.
        </Text>
        </Flex>
      </Box>
    </main>
    <style jsx>{
      `
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
      `
    }

    </style>
  </>
);

export default Home;