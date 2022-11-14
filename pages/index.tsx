import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Masthead from "../components/masthead";
import SpotifyTracks from "../components/spotify";
import Releases from "../components/release";
import GigsEvents from "../components/events";
import About from "../components/about";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>asvanyviz2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <About />
      <SpotifyTracks />
      <Releases />
      <GigsEvents />
      <Footer />
    </div>
  );
}
