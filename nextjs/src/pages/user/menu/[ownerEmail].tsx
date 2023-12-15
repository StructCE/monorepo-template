import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  user: any;
}> = async (context) => {
  const ownerEmail = context.query.ownerEmail;
  const res = await fetch(
    `http://localhost:3000/api/user/owner/${ownerEmail}`,
    { method: "GET" }
  );

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
  return (
    <div>
      {/* {JSON.stringify(user)} */}
      <a href={`/restaurant/menu/${user.restaurant.id}`}>Cardápio</a>
    </div>
  );
}
