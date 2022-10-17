import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer hideProgressBar={false} limit={1} />
      <Footer />
    </>
  );
}

export default MyApp;
