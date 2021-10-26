import Head from "next/head";
import styles from "../styles/Home.module.css";
import CloudAssets from "../components/CloudAssets";
import { Typography } from "@progress/kendo-react-common";

export async function getStaticProps() {
  const res = await fetch(
    `https://res.cloudinary.com/kizmelvin/image/list/v1633911053/city.json`
  );
  const resData = await res.json();

  if (!resData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { resData },
  };
}

export default function Home({ resData }) {
  return (
    <>
      <Head>
        <title>KendoUI Gallary </title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className="wrap k-align-items-center">
          <Typography.h2 textAlign={"center"} fontWeight={"bold"}>
            Awesome Gallary
          </Typography.h2>
          <Typography.p
            textAlign={"center"}
            themeColor={"inverse"}
            fontWeight={"light"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quam eos consequatur, <br /> rem ratione nesciunt quisquam dolorem,
            repudiandae officia totam amet corporis illum <br /> minus fugit
            incidunt magnam deserunt veniam dignissimos.
          </Typography.p>
          <CloudAssets data={resData} />
        </main>
      </div>
    </>
  );
}
