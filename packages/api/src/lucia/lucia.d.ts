// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  type Auth = import("./index").Auth;
  type UserAttributes = {
    // Adicionar atributos "públicos" do schema de usuário aqui
    email: string;
    emailSignInVerified: boolean;
  };
}
