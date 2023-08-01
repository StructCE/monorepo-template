import { useAuthContext } from "@struct/auth-context";
import type { NextPage } from "next";
import React from "react";

const AuthShowcase : React.FC = () => {
  const { user } = useAuthContext();

  return <></>
}

const Home: NextPage = () => {

  return (
    <h1>ava</h1>
  )
}

export default Home;