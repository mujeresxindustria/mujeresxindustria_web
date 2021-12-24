import Head from "next/head";
import dynamic from "next/dynamic";

const MisionWithNoSSR = dynamic(() => import("../components/Mision"), {
  ssr: false,
});

const EjeWithNoSSR = dynamic(() => import("../components/Eje"), { ssr: false });

import Counters from "../components/Counters";
import CarouselComp from "../components/CarouselComp";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mujeres por la Industria</title>
        <meta name="description" content="Sitio web de Mujeres por la Industria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <CarouselComp />
        <MisionWithNoSSR />
        <EjeWithNoSSR />
        <Counters />
      </main>
    </>
  );
};
export default Home;
