import Mailjet from "node-mailjet";

import { getConfirmSignUpEmail } from "@struct/email-templates";

import { env } from "../env.mjs";

const mailjet = new Mailjet({
  apiKey: env.MAILJET_API_KEY,
  apiSecret: env.MAILJET_SECRET_KEY,
  config: {
    version: "v3.1",
  },
});

const sendVerificationEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  const confirmationLink = `${env.BASE_WEB_URL}/api/verify-email/${token}`;

  const { html, text } = getConfirmSignUpEmail({
    confirmationLink,
    email: to,
    logoUrl:
      "https://struct.unb.br/static/media/logoTransparente.4780bc19c0935d5cca74.png",
  });

  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "projetos@struct.unb.br",
          Name: "Struct",
        },
        To: [
          {
            Email: to,
          },
        ],
        Subject: "Confirme seu email",
        TextPart: text,
        HTMLPart: html,
      },
    ],
  });
};

export const mailer = {
  sendVerificationEmail,
};
