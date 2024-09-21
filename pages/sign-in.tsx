import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import SignIn from "@/components/sign-in/SignIn";

const session = () => {
  return (
    <div>
      <ResponsiveAppBar title="" />
      <SignIn />
    </div>
  );
};

export default session;
