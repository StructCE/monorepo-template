import { render } from "@react-email/render";

import ConfirmSignUp from "./src/emails/ConfirmSignUp";

export function getConfirmSignUpEmail({
  confirmationLink,
  email,
  logoUrl,
}: {
  confirmationLink: string;
  email: string;
  logoUrl: string;
}) {
  const html = render(
    ConfirmSignUp({
      confirmationLink,
      email,
      logoUrl,
    }),
  );

  // some email clients can't render html, so we also include a plain text version
  const text = render(
    ConfirmSignUp({
      confirmationLink,
      email,
      logoUrl,
    }),
    { plainText: true },
  );

  return {
    html,
    text,
  };
}
