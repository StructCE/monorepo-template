import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ConfirmSignUpProps {
  email: string;
  logoUrl: string;
  confirmationLink: string;
}

const appName = "NOME DO SITE/APP";

export const ConfirmSignUp = ({
  email,
  confirmationLink,
  logoUrl,
}: ConfirmSignUpProps) => {
  const previewText = `Registre-se em ${appName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[365px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={logoUrl}
                width="40"
                height="37"
                alt={appName}
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 mb-[30px] mt-0 p-0 text-center text-[24px] font-normal text-black">
              <strong className="leading-10">{appName}</strong>
              <div className="mb-10 border-0 border-b border-solid" />
              Confirme seu registro
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {email},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Você iniciou o processo de se registrar em{" "}
              <strong>{appName}</strong>.
            </Text>

            <Text className="text-lg leading-[24px] text-black">
              Para confirmar o registro
            </Text>
            <Section className="mb-[26px] mt-[26px] text-center">
              <Button
                pX={20}
                pY={12}
                className="rounded bg-[#000000] text-center text-[12px] font-semibold text-white no-underline"
                href={confirmationLink}
              >
                Clique aqui
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              ou copie e cole essa URL no seu navegador:{" "}
              <Link
                href={confirmationLink}
                className="text-blue-600 no-underline"
              >
                {confirmationLink}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Essa é uma tentativa de registro em {appName} com o email{" "}
              <span className="text-black">{email} </span>. Se você não estava
              esperando esse email, pode ignorá-lo.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmSignUp;
