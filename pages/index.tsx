import Head from "next/head";
import { useEffect, useState } from "react";
import { Box, Text, Link, Flex } from "rebass";
import TitleAndMetaTags from "components/TitleAndMetaTags";
const Home = ({ year }) => {
  const [nomadData, setNomadData] = useState(null);

  const dateToYMD = (date) => {
    return date.toLocaleString("en-US", {
      month: "long", // "June"
      day: "2-digit", // "01"
    });
  };

  useEffect(() => {
    fetch("https://nomadlist.com/@jeroam.json")
      .then((res) => res.json())
      .then((data) => {
        setNomadData(data?.location);
      });
  }, []);
  const nextTravelDate = new Date(nomadData?.next?.date_start);
  const nextTravelLabel =
    nomadData?.next.length || nomadData?.next?.city
      ? ` and will be at ${nomadData?.next.city}
  ${nomadData?.next.country} on ${dateToYMD(nextTravelDate)}`
      : "";
  return (
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

          <Text mb={50} fontSize={24} color="#131315" lineHeight="30px">
            I'm a JavaScript|TypeScript Engineer with over {year - 2013} years
            of professional experience, specializing in React, Node.js, and Bun.
            My expertise extends to modern web technologies, including Jamstack
            architecture, serverless computing, and creating exceptional user
            experiences.
          </Text>

          <Text mb={50} fontSize={24} color="#131315" lineHeight="30px">
            I hold a Bachelor of Science in Computer Engineering, which provided
            me with a strong foundation in both software and hardware. This
            background, combined with my passion for tinkering with electronics,
            exploring low-level languages like C and Assembly, and delving into
            Cisco networking concepts, allows me to approach problems from
            multiple angles. This diverse skill set enables me to tackle
            complex, multi-faceted projects effectively.
          </Text>

          <Text mb={50} fontSize={24} color="#131315" lineHeight="30px">
            Throughout my career, I've worked on a diverse range of projects,
            from scalable web applications to performance-optimized mobile-first
            websites. I'm passionate about writing clean, maintainable code and
            staying up-to-date with the latest industry trends and best
            practices. Currently, I'm expanding my skill set by exploring Python
            and Go.
          </Text>
          <Text mb={50} fontSize={24} color="#131315" lineHeight="30px">
            Born in the Philippines, I've embraced the digital nomad lifestyle
            since 2018, working remotely from various locations around the
            world. This unique perspective allows me to bring a global mindset
            to my work. Currently, I'm based in {nomadData?.now?.city},{" "}
            {nomadData?.now?.country}
            {nextTravelLabel}.
          </Text>

          <Text mb={50} fontSize={24} color="#131315" lineHeight="30px">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech. Whether it's discussing JavaScript
            ecosystems, Bun's performance, electronics, low-level programming,
            or my recent forays into Python and Go, I'm eager to connect. Feel
            free to reach out to me at{" "}
            <Link href="mailto:contact@ramosjero.me" color="#595959">
              contact@ramosjero.me
            </Link>
            .
          </Text>

          <Flex>
            <Text fontSize={24} as="p" color="#131315">
              You can find me on
              <Link
                href="https://nomadlist.com/@jeroam"
                ml={"5px"}
                color="#595959"
                target="_blank"
                rel="noopener"
              >
                nomadlist
              </Link>
              ,
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
              </Link>
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
};

export default Home;
