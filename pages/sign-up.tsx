import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import SignUp from "@/components/sign-up/SignUp";

const signUp = () => {
  ///////////////////////////////////////////////////////////////
  return (
    <div>
      <ResponsiveAppBar title="" />
      <SignUp />
    </div>
  );
};

export default signUp;
