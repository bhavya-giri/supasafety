import Head from "next/head";
import HomePage from "../components/HomePage";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  return (
    <main>
      <Head>
        <title>SupaSafety | Home</title>
      </Head>
      <HomePage />
    </main>
  );
}
