import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Knowledge } from "@/types";

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

export default function Home() {
  return <div>トップページ</div>;
}
