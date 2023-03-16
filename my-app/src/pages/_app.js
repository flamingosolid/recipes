import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/Card.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />;
    </main>
  );
}
