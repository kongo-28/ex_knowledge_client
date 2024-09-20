import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import SignUp from "@/components/sign-up/SignUp";

const register = () => {
  // ////////  handleSubmit  ////////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    //APIをたたく
    try {
      await axios.post("http://localhost:3000/auth", {
        email: email,
        password: password,
      });

      router.push("/"); //リダイレクト
    } catch (err) {
      alert("登録に失敗しました");
    }
  };
  // ////////  handleSubmit  ////////////////////////////////////

  ///////////////////////////////////////////////////////////////
  return (
    <div className={styles.container}>
      {/* <Header title="Register" /> */}
      <ResponsiveAppBar title="Register" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>email</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label className={styles.label}>password</label>

        <textarea
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit" className={styles.button}>
          register!!!
        </button>
      </form>
      <SignUp />
    </div>
  );
};

export default register;
