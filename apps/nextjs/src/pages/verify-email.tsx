import Link from "next/link";
import { useRouter } from "next/router";

export default function VerifyEmailPage() {
  const router = useRouter();
  const { sentEmailTo } = router.query;

  function handleResendEmail() {
    alert("calma lá");
  }

  return (
    <section className="flex min-h-screen justify-center bg-slate-800 pt-16 text-sky-50 ">
      <main className="h-max w-full max-w-xl rounded bg-zinc-900 p-10">
        <h1 className="mb-8 text-2xl md:text-3xl">
          Verifique seu email antes de logar
        </h1>
        <div className="flex flex-col gap-2 text-zinc-500 md:text-lg">
          <p>
            Olhe sua{" "}
            <span className="text-lg text-sky-200 md:text-xl">
              caixa de entrada
            </span>{" "}
            e clique no link que enviamos para{" "}
            <span className="text-lg text-sky-200 md:text-xl">
              {sentEmailTo}
            </span>
          </p>
          <p className="mt-4 text-sm md:text-base">
            Caso não tenha recebido o email,
            <br />
            <button
              className="py-2 text-base text-sky-400 md:text-lg"
              onClick={handleResendEmail}
            >
              clique aqui para enviá-lo novamente
            </button>
          </p>
          <p className="mt-4 text-sm md:text-base">
            Caso tenha acabado de verificar,
            <br />
            <Link
              className="py-2 text-base text-sky-400 md:text-lg"
              href="/login"
            >
              tente logar
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
}
