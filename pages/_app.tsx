import { AppProps } from "next/app";
import Footer from "components/Footer";
import { useAnalytics } from "utils/analytics";
import { inter } from "../lib/fonts";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  useAnalytics();
  const year = new Date().getFullYear();
  return (
    <main className={`app-container ${inter.className}`}>
      <div className="content">
        <Component {...pageProps} year={year} />
      </div>
      <Footer year={year} />
    </main>
  );
}

export default App;
