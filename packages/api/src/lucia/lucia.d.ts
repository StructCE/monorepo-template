// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./index").Auth;
  type UserAttributes = {
    email: string;
    username?: string;
  };
}
