import React from "react";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

const session = () => {
  return (
    <div className={styles.container}>
      {/* <Header title="Session" /> */}
      <ResponsiveAppBar title="ログイン" />
    </div>
  );
};

export default session;
