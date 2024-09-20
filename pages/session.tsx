import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import SignIn from "@/components/sign-in/SignIn";

const session = () => {
  // ////////  handleSubmit  ////////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(email, password);

    //APIをたたく
    try {
      await axios.post("http://localhost:3000/auth/sign_in", {
        email: email,
        password: password,
      });

      router.push("/"); //リダイレクト
    } catch (err) {
      alert("ログインに失敗しました");
    }
  };
  // ////////  handleSubmit  ////////////////////////////////////

  ///////////////////////////////////////////////////////////////
  return (
    <div>
      <ResponsiveAppBar title="sign in" />
      <SignIn />
    </div>
  );
};

export default session;
