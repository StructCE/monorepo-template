import React from "react";
import type { NextPage } from "next";

import { useAuthContext } from "@struct/auth-context";

const AuthShowcase: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

const HomePage: NextPage = () => {
  return (
    <section>
      <h1>HomePage</h1>
      <AuthShowcase />
    </section>
  );
};

export default HomePage;
