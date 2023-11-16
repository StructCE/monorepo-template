import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className={styles.body}></div>
      <Component {...pageProps}  />
      <Footer />
    </>
  );
}
