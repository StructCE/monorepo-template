import { FormEventHandler, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as Tabs from "@radix-ui/react-tabs";

import { useAuthContext } from "~/authContext";

const Home: NextPage = () => {
  const { login, user, signup } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user]);

  const [isRegistering, setIsRegistering] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function handleChange(key: keyof typeof userInfo, value: string) {
    setUserInfo((p) => ({ ...p, [key]: value }));
  }
  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    signup(userInfo)
      .then((res) => alert(`Usuário de email ${res.email} criado`))
      .catch((er) => alert(er.message));
  };

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login(userInfo)
      .then((usr) => alert(JSON.stringify(usr)))
      .catch(() => alert("Email ou usuário incorreto(s)!"));
  };

  return (
    <main className="flex min-h-screen justify-center bg-slate-800 pt-16 text-sky-50">
      <Tabs.Root
        defaultValue="login"
        className="h-max w-full max-w-xl rounded bg-zinc-900"
      >
        <Tabs.List className="flex w-full flex-wrap rounded-t">
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tl border-b border-gray-500 p-3 opacity-80 outline-1 outline-offset-1 outline-white transition-all focus-visible:outline data-[state='active']:border-white data-[state='active']:text-sky-100 data-[state='active']:opacity-100"
            value="login"
          >
            Logar
          </Tabs.Trigger>
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tr border-b border-gray-500 p-3 opacity-80 outline-1 outline-offset-1 outline-white transition-all focus-visible:outline data-[state='active']:border-white data-[state='active']:text-sky-100 data-[state='active']:opacity-100"
            value="register"
          >
            Nova conta
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="p-10 outline-1 outline-offset-1 outline-white focus-visible:outline"
          value="register"
        >
          <form className="flex flex-col" onSubmit={handleRegister}>
            <h2 className="mb-4 text-lg opacity-90">Registre uma nova conta</h2>
            <label className="pr-3" htmlFor="name">
              Nome
            </label>
            <br />
            <input
              onChange={(e) => handleChange("username", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="name"
            />
            <label className="pr-3 pt-10" htmlFor="email">
              Email
            </label>
            <br />
            <input
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="email"
            />
            <label className="pr-3 pt-10" htmlFor="password">
              Senha:
            </label>
            <br />
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="password"
            />
            <label className="pr-3 pt-10" htmlFor="passwordConfirmation">
              Confirme sua Senha:
            </label>
            <br />
            <input
              onChange={(e) =>
                handleChange("passwordConfirmation", e.target.value)
              }
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="passwordConfirmation"
            />
            <button className="mt-10 rounded p-3 text-right underline underline-offset-4 outline-1 outline-offset-1 outline-white focus-visible:outline">
              Criar
            </button>
          </form>
        </Tabs.Content>
        <Tabs.Content
          className="p-10 outline-1 outline-offset-1 outline-white focus-visible:outline"
          value="login"
        >
          <form className="flex flex-col" onSubmit={handleLogin}>
            <h2 className="mb-4 text-lg opacity-90">Faça Login</h2>
            <label className="pr-3" htmlFor="email">
              Email
            </label>
            <br />
            <input
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="email"
            />
            <label className="pr-3 pt-10" htmlFor="password">
              Senha:
            </label>
            <br />
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 outline-1 outline-current focus-visible:outline"
              id="password"
            />
            <button className="p-3-2 mt-10 text-right underline underline-offset-4 outline-1 outline-offset-1 outline-white focus-visible:outline">
              Entrar
            </button>
          </form>
        </Tabs.Content>
      </Tabs.Root>
      {/* {isRegistering ? (
        <form className="flex flex-col" onSubmit={handleRegister}>
          <h2>Registre-se</h2>
          <label className="pr-3" htmlFor="name">
            Nome
          </label>
          <br />
          <input
            onChange={(e) => handleChange("username", e.target.value)}
            className="text-black p-2"
            id="name"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="email">
            Email
          </label>
          <br />
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            className="text-black p-2"
            id="email"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="password">
            Senha:
          </label>
          <br />
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            className="text-black p-2"
            id="password"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="">
            Confirme sua Senha:
          </labe           classNamel>
          <br />
          <input
            onChange={(e) =>
              handleChange("passwordConfirmation", e.target.value)
            id
            className="text-black p-2"
            name="passwordConfirmation"
          />
          <div className="h-10" />
          <button className="text-right 1 outline-offset-1 outline-white focus-visible:outline ml-1/2 rounded bg-black px-3 py-2 ml-auto">Criar</button>
        </form>
      ) : (
        <form className="flex flex-col" onSubmit={handleLogin}>
          <h2>Faça Login</h2>
          <label className="pr-3" htmlFor="email">
            Email
          </label>
          <br />
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            className="text-black p-2"
            id="email"
          />
          <div className="h-10" />
          <label className="pr-3" htmlFor="password">
            Senha:
          </label>
          <br />
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            className="text-black p-2"
            id="password"
          />
          <div className="h-10" />
          <button className="text-right 1 outline-offset-1 outline-white focus-visible:outline ml-1/2 rounded bg-black px-3 py-2 ml-auto">Logar</button>
        </form>
      )}
      <button
        onClick={() => setIsRegistering((p) => !p)}
        className="mt-10 p-3 text-white underline"
      >
        {isRegistering
          ? "I already have an account"
          : "I don't have an account"}
      </button> */}
    </main>
  );
};

export default Home;
