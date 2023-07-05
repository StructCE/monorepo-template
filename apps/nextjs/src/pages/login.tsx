import { useEffect, useState, type FormEventHandler } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as Tabs from "@radix-ui/react-tabs";

import { useAuthContext } from "@struct/auth-context";

const Home: NextPage = () => {
  const { login, user, signup } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user) void router.replace("/");
  }, [user, router]);

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
      .catch((er) => {
        // get error type with conditionals:
        if (er instanceof Error) alert(er.message);
      });
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
        <Tabs.List
          aria-label="Faça login ou registre uma conta"
          className="flex w-full flex-wrap rounded-t"
        >
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tl border-b border-gray-500 p-3 text-sky-100 opacity-80 outline-1 outline-offset-1 outline-white transition-all focus-visible:outline data-[state='active']:border-white data-[state='active']:text-white data-[state='active']:opacity-100"
            value="login"
          >
            Logar
          </Tabs.Trigger>
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tr border-b border-gray-500 p-3  text-sky-100 opacity-80 outline-1 outline-offset-1 outline-white transition-all focus-visible:outline data-[state='active']:border-white data-[state='active']:text-white data-[state='active']:opacity-100"
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
            <h2 className="mx-auto text-xl opacity-90">
              Registre uma nova conta
            </h2>
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="name"
            >
              Nome
            </label>
            <br />
            <input
              onChange={(e) => handleChange("username", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="name"
            />
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="email"
            />
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="password"
            >
              Senha:
            </label>
            <br />
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="password"
              type="password"
            />
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="passwordConfirmation"
            >
              Confirme sua Senha:
            </label>
            <br />
            <input
              onChange={(e) =>
                handleChange("passwordConfirmation", e.target.value)
              }
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="passwordConfirmation"
              type="password"
            />
            <button className="group mt-10 rounded py-3 text-right focus-visible:outline-none">
              <span className="rounded bg-white/50 p-3 font-bold text-zinc-950 outline-1 outline-offset-2 outline-gray-300 group-focus-visible:outline">
                Criar
              </span>
            </button>
          </form>
        </Tabs.Content>
        <Tabs.Content
          className="p-10 outline-1 outline-offset-1 outline-white focus-visible:outline"
          value="login"
        >
          <form className="flex flex-col" onSubmit={handleLogin}>
            <h2 className="mx-auto text-xl opacity-90">Faça Login</h2>
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              onChange={(e) => handleChange("email", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="email"
            />
            <label
              className="pr-3 pt-10 text-sky-100 opacity-80"
              htmlFor="password"
            >
              Senha:
            </label>
            <br />
            <input
              onChange={(e) => handleChange("password", e.target.value)}
              className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline"
              id="password"
              type="password"
            />
            <button className="group mt-10 rounded py-3 text-right focus-visible:outline-none">
              <span className="rounded bg-white/50 p-3 font-bold text-zinc-950 outline-1 outline-offset-2 outline-gray-300 group-focus-visible:outline">
                Entrar
              </span>
            </button>
          </form>
        </Tabs.Content>
      </Tabs.Root>
    </main>
  );
};

export default Home;
