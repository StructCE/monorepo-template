`use session`;

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  user: any;
}> = async (context) => {
  const ownerId = context.query.ownerId;
  const res = await fetch(`http://localhost:3000/api/user/owner/${ownerId}`, {
    method: "GET",
  });

  let user = {};
  if (res.ok) {
    user = await res.json();
  }

  return { props: { user } };
};

export default function UserMenuPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      alert("Faça login para continuar!");
      router.push(`/api/auth/signin`);
    },
  });

  if (status === `loading`) {
    return (
      <div>
        <h1>Faça Login!</h1>
      </div>
    );
  } else {
    return (
      <div>
        {/* {JSON.stringify(user)} */}
        <a href={`/restaurant/menu/${user.restaurant.id}`}>Cardápio</a>
      </div>
    );
  }
}
