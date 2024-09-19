import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src="/logo.jpg"
          width={100}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="http://localhost:3001/register"> Register </Link>
            </li>
            <li>
              <Link href="http://localhost:3001/session"> Sign in </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
