import { render } from "@react-email/render";

import ConfirmSignUp from "./src/emails/ConfirmSignUp";

export function getConfirmSignUpHTML({
  confirmationLink,
  email,
  logoUrl,
}: {
  confirmationLink: string;
  email: string;
  logoUrl: string;
}) {
  return render(
    ConfirmSignUp({
      confirmationLink,
      email,
      logoUrl,
    }),
  );
}
