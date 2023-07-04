import { FormEventHandler, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { useSession } from "@struct/auth-context";

import { api, type RouterOutputs } from "~/utils/api";

const Home: NextPage = () => {
  const signUp = api.auth.signUp.useMutation().mutate;
  const login = api.auth.login.useQuery;

  const [isRegistering, setIsRegistering] = useState(true);
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function handleRegisterChange(key: string, value: string) {
    setRegisterInfo((p) => ({ ...p, [key]: value }));
  }
  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    signUp(registerInfo);
  };

  function handleLoginChange(key: string, value: string) {
    setLoginInfo((p) => ({ ...p, [key]: value }));
  }
  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login(loginInfo);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      {isRegistering ? (
        <form onSubmit={handleRegister}>
          <label className="pr-3" htmlFor="">
            Nome
          </label>
          <br />
          <input
            onChange={(e) => handleRegisterChange("name", e.target.value)}
            className="text-black"
            name="name"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="">
            Email
          </label>
          <br />
          <input
            onChange={(e) => handleRegisterChange("email", e.target.value)}
            className="text-black"
            name="email"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="">
            Senha:
          </label>
          <br />
          <input
            onChange={(e) => handleRegisterChange("password", e.target.value)}
            className="text-black"
            name="password"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="">
            Confirme sua Senha:
          </label>
          <br />
          <input
            onChange={(e) =>
              handleRegisterChange("passwordConfirmation", e.target.value)
            }
            className="text-black"
            name="passwordConfirmation"
          />
          <div className="h-10" />
          <button className="ml-1/2 rounded bg-black px-3 py-2">Criar</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <label className="pr-3" htmlFor="">
            Email
          </label>
          <br />
          <input
            onChange={(e) => handleLoginChange("email", e.target.value)}
            className="text-black"
            name="email"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="">
            Senha:
          </label>
          <br />
          <input
            onChange={(e) => handleLoginChange("password", e.target.value)}
            className="text-black"
            name="password"
          />
          <div className="h-10" />
          <button className="ml-1/2 rounded bg-black px-3 py-2">Logar</button>
        </form>
      )}
      <button
        onClick={() => setIsRegistering((p) => !p)}
        className="mt-10 p-3 text-white underline"
      >
        {isRegistering
          ? "I already have an account"
          : "I don't have an account"}
      </button>
    </main>
  );
};

export default Home;
