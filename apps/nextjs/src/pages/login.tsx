import { useEffect, useState, type FormEventHandler } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as Tabs from "@radix-ui/react-tabs";
import { z } from "zod";

import { useAuthContext } from "@struct/auth-context";

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine((inp) => inp.password === inp.passwordConfirmation, {
    message: "Password must be equal to its confirmation.",
  });

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Home: NextPage = () => {
  const { signIn, user, signUp } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (user) void router.replace("/");
  }, [user, router]);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState<{
    email?: string[];
    password?: string[];
    passwordConfirmation?: string[];
  }>({});

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(key: keyof typeof userInfo, value: string) {
    setErrors((p) => ({ ...p, [key]: undefined }));
    setUserInfo((p) => ({ ...p, [key]: value }));
  }
  const handleRegister: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const parsed = signUpSchema.safeParse(userInfo);
    if (!parsed.success) {
      setIsLoading(false);
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }
    setErrors({});

    signUp(parsed.data)
      .then((res) => {
        alert(JSON.stringify(res, null, 2));
        void router.push(`/verify-email?sentEmailTo=${res.email}`);
      })
      .catch((er) => {
        setIsLoading(false);
        if (er instanceof Error) alert(er.message);
      });
  };

  const handleLogin: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const parsed = signInSchema.safeParse(userInfo);

    if (!parsed.success) {
      setIsLoading(false);
      setErrors(parsed.error.flatten().fieldErrors);
      return;
    }
    setErrors({});

    signIn(userInfo)
      .then(() => router.replace("/"))
      .catch((er) => {
        setIsLoading(false);
        if (er instanceof Error && er.message.includes("verified")) {
          void router.push(`/verify-email?sentEmailTo=${userInfo.email}`);
        } else alert("Email ou usuário incorreto(s)!");
      });
  };

  return (
    <main className="flex min-h-screen justify-center bg-slate-800 pt-16 text-sky-50">
      <Tabs.Root
        defaultValue="signIn"
        className="h-max w-full max-w-xl rounded bg-zinc-900"
        onValueChange={() => setErrors({})}
      >
        <Tabs.List
          aria-label="Faça signIn ou registre uma conta"
          className="flex w-full flex-wrap rounded-t"
        >
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tl border-zinc-700 p-3 text-sky-100 opacity-70 outline-1 outline-offset-1 outline-white focus-visible:outline data-[state='inactive']:border-b data-[state='inactive']:border-r data-[state='inactive']:bg-zinc-800 data-[state='active']:text-white data-[state='active']:opacity-100 data-[state='inactive']:shadow-inner data-[state='inactive']:hover:bg-zinc-900"
            value="signIn"
          >
            Entrar
          </Tabs.Trigger>
          <Tabs.Trigger
            className="h-full w-1/2 rounded-tr border-zinc-700 p-3 text-sky-100  opacity-70 outline-1 outline-offset-1 outline-white focus-visible:outline data-[state='inactive']:border-b data-[state='inactive']:border-l data-[state='inactive']:bg-zinc-800 data-[state='active']:text-white data-[state='active']:opacity-100 data-[state='inactive']:shadow-inner data-[state='inactive']:hover:bg-zinc-900"
            value="register"
          >
            Criar conta
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="p-10 outline-1 outline-offset-1 outline-white focus-visible:outline"
          value="register"
        >
          <form className="flex flex-col" onSubmit={handleRegister}>
            <fieldset className="contents" disabled={isLoading}>
              <h2 className="mx-auto text-xl opacity-90">
                Registre uma nova conta
              </h2>
              {(
                [
                  {
                    attrName: "email",
                    label: "Email",
                  },
                  {
                    attrName: "password",
                    label: "Senha",
                  },
                  {
                    attrName: "passwordConfirmation",
                    label: "Confirme sua Senha",
                  },
                ] as const
              ).map(({ label, attrName }) => (
                <div className="contents" key={attrName}>
                  <label
                    className="pr-3 pt-10 text-sky-100 opacity-80"
                    htmlFor={attrName}
                  >
                    {label}
                  </label>
                  <br />
                  <input
                    onChange={(e) => handleChange(attrName, e.target.value)}
                    className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline disabled:cursor-default disabled:opacity-50"
                    id={attrName}
                  />
                  {errors[attrName] && (
                    <span className="text-red-500">
                      {errors[attrName]?.map((er) => (
                        <p key={er}>{er}</p>
                      ))}
                    </span>
                  )}
                </div>
              ))}
              <button className="group mt-10 rounded py-3 text-right focus-visible:outline-none disabled:cursor-default disabled:opacity-50">
                <span className="rounded bg-white/50 p-3 font-bold text-zinc-950 outline-1 outline-offset-2 outline-gray-300 hover:bg-white/60 group-focus-visible:outline">
                  Criar
                </span>
              </button>
            </fieldset>
          </form>
        </Tabs.Content>
        <Tabs.Content
          className="p-10 outline-1 outline-offset-1 outline-white focus-visible:outline"
          value="signIn"
        >
          <form className="flex flex-col" onSubmit={handleLogin}>
            <fieldset className="contents" disabled={isLoading}>
              <h2 className="mx-auto text-xl opacity-90">Faça Login</h2>
              {(
                [
                  {
                    attrName: "email",
                    label: "Email",
                  },
                  {
                    attrName: "password",
                    label: "Senha",
                  },
                ] as const
              ).map(({ label, attrName }) => (
                <div className="contents" key={attrName}>
                  <label
                    className="pr-3 pt-10 text-sky-100 opacity-80"
                    htmlFor={attrName}
                  >
                    {label}
                  </label>
                  <br />
                  <input
                    onChange={(e) => handleChange(attrName, e.target.value)}
                    className="rounded border border-white/50 bg-transparent p-2 text-lg outline-1 outline-current focus-visible:outline disabled:cursor-default disabled:opacity-50"
                    id={attrName}
                  />

                  {errors[attrName] && (
                    <span className="text-red-500">
                      {errors[attrName]?.map((er) => (
                        <p key={er}>{er}</p>
                      ))}
                    </span>
                  )}
                </div>
              ))}
              <button className="group mt-10 rounded py-3 text-right focus-visible:outline-none disabled:cursor-default disabled:opacity-50">
                <span className="rounded bg-white/50 p-3 font-bold text-zinc-950 outline-1 outline-offset-2 outline-gray-300 hover:bg-white/60 group-focus-visible:outline">
                  Entrar
                </span>
              </button>
            </fieldset>
          </form>
        </Tabs.Content>
      </Tabs.Root>
    </main>
  );
};

export default Home;
