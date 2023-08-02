import type { NextPage } from "next";
import Link from "next/link";

import { useAuthContext } from "@struct/auth-context";

const Home: NextPage = () => {
  const { user, signOut } = useAuthContext();

  return (
    <section className="flex min-h-screen bg-zinc-900 text-sky-200">
      <h1>HomePage</h1>
      <main className="flex w-full flex-col items-center justify-center">
        <div className="flex flex-col">
          {user && (
            <h2>
              Logado como <br />
              <span className="ml-4 text-xl">{user.email}</span>
            </h2>
          )}
          {user ? (
            <button
              className="mx-auto p-3 text-lg underline"
              onClick={() => void signOut()}
            >
              Sair
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </main>
    </section>
  );
};

export default Home;
