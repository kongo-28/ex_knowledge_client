import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Knowledge } from "@/types";
import Link from "next/link";

type Props = {
  knowledges: Knowledge[];
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/knowledges");
  const knowledges = await res.json();

  console.log(knowledges);

  return {
    props: {
      knowledges,
    },
    revalidate: 60 * 60 * 24,
  };
}

export default function Home({ knowledges }: Props) {
  return (
    <>
      <Head>
        <title>EX-Knowledge</title>
        <meta title="description" content="Generated by create next app" />
        <meta title="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeContainer}>
        {/* <h2>EX-Knowledge</h2> */}
        <div>
          <Image
            src="/logo.jpg"
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div>
          {knowledges.map((knowledge: Knowledge) => (
            <div key={knowledge.id} className={styles.postCard}>
              <p>{knowledge.title}</p>
              <p>{knowledge.content}</p>
              <button className={styles.likeButton}>Like</button>
              <button className={styles.superLikeButton}>super Like!</button>
              <button className={styles.knowButton}>Know</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
