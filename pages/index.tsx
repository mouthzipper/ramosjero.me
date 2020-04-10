import Head from 'next/head'
import { Box, Text, Link, Flex } from 'rebass';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
const Home = () => (
  <>
    <TitleAndMetaTags/>
    <Box p={[4, 5, 6]} bg="white" color="#4B4B4B" width={['80%', '60%', '60%']}>
      <Flex alignItems="center">
        <Text mb={100} fontSize={18} mr={10}>Jerome</Text>
        <Text mb={100} color="gray" fontSize={20}>Ramos</Text>
      </Flex>
      
      <Text mb={50} fontSize={20}>I’m a JavaScript Engineer currently hooked with React and Node. Interested in jamstack, serverless, user experience.</Text>
      <Text mb={50} fontSize={20}>Currently working at <Link href="https://crediblemind.com" rel="noopener noreferrer" color="gray" target="_blank">CredibleMind</Link> helping people find curated resources for mental and spritual health.</Text>
      <Text mb={50} fontSize={20}>Born in the Philippines and is working remotely. I’m an NPA(No Permanent Address) since 2018 hopping from country to country that accepts my passport</Text>
      <Flex>
      <Text fontSize={20} as="p">You can find me on
        <Link href="https://twitter.com/mouthzipperio" ml={'5px'} color="gray" target="_blank">
          twitter
        </Link>,
        <Link href="https://github.com/mouthzipper" ml={'5px'} color="gray" target="_blank">
          github
        </Link> or 
        <Link href="https://www.linkedin.com/in/jeromeramos/" ml={'5px'} color="gray" target="_blank">
          linkedin
        </Link>.
      </Text>
      </Flex>
    </Box>
  </>
);

export default Home;