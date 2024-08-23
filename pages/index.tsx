import Head from "next/head";
import { useEffect, useState } from "react";
import TitleAndMetaTags from "components/TitleAndMetaTags";
import { inter } from "../lib/fonts";

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
      <main
        id="maincontent"
        role="main"
        className={`${inter.className} font-sans`}
      >
        <div className="container">
          <h1 className="title">
            JEROME<span className="super">RAMOS</span> 👋
          </h1>

          <p className="content">
            I'm a JavaScript|TypeScript Engineer with over {year - 2013} years
            of professional experience, specializing in React, Node.js, and Bun.
            My expertise extends to modern web technologies, including Jamstack
            architecture, serverless computing, and creating exceptional user
            experiences.
          </p>

          <p className="content">
            I hold a Bachelor of Science in Computer Engineering, which provided
            me with a strong foundation in both software and hardware. This
            background, combined with my passion for tinkering with electronics,
            exploring low-level languages like C and Assembly, and delving into
            Cisco networking concepts, allows me to approach problems from
            multiple angles. This diverse skill set enables me to tackle
            complex, multi-faceted projects effectively.
          </p>

          <p className="content">
            Throughout my career, I've worked on a diverse range of projects,
            from scalable web applications to performance-optimized mobile-first
            websites. I'm passionate about writing clean, maintainable code and
            staying up-to-date with the latest industry trends and best
            practices. Currently, I'm expanding my skill set by exploring Python
            and Go.
          </p>

          <p className="content">
            Born in the Philippines, I've embraced the digital nomad lifestyle
            since 2018, working remotely from various locations around the
            world. This unique perspective allows me to bring a global mindset
            to my work. Currently, I'm based in {nomadData?.now?.city},{" "}
            {nomadData?.now?.country}
            {nextTravelLabel}.
          </p>

          <p className="content">
            I'm always open to new opportunities, collaborations, or just a
            friendly chat about tech. Whether it's discussing JavaScript
            ecosystems, Bun's performance, electronics, low-level programming,
            or my recent forays into Python and Go, I'm eager to connect. Feel
            free to reach out to me at{" "}
            <a href="mailto:contact@ramosjero.me" className="link">
              contact@ramosjero.me
            </a>
            .
          </p>

          <p className="content">
            You can find me on
            <a
              href="https://nomadlist.com/@jeroam"
              className="link"
              target="_blank"
              rel="noopener"
            >
              nomadlist
            </a>
            ,
            <a
              href="https://twitter.com/mouthzipperio"
              className="link"
              target="_blank"
              rel="noopener"
            >
              twitter
            </a>
            ,
            <a
              href="https://github.com/mouthzipper"
              className="link"
              target="_blank"
              rel="noopener"
            >
              github
            </a>
          </p>
        </div>
      </main>
      <style jsx>{`
        .container {
          padding: 3rem;
          background-color: #f8f9fa;
          color: #333;
          max-width: 800px;
          line-height: 1.6;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
          color: #1a1a1a;
        }
        .super {
          color: #4a4a4a;
          margin-left: 0.5rem;
        }
        .content {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1.5rem;
        }
        .link {
          color: #0066cc;
          text-decoration: none;
          margin-left: 0.5rem;
          transition: color 0.3s ease;
        }
        .link:hover {
          color: #004080;
          text-decoration: underline;
        }
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          padding: 8px;
          background-color: #0066cc;
          color: white;
          z-index: 100;
          transition: top 0.3s ease;
        }
        .skip-link:focus {
          top: 0;
        }
        :global(body) {
          font-family: var(--font-inter);
          background-color: #f8f9fa;
        }
      `}</style>
    </>
  );
};

export default Home;
