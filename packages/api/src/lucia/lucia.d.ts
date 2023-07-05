// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  type Auth = import("./index").Auth;
  type UserAttributes = {
    email: string;
    username?: string;
  };
}
