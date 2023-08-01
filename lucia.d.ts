// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./packages/api/lucia").Auth;
  type DatabaseUserAttributes = Omit<import("./packages/db").User, "id">;
  type DatabaseSessionAttributes = {};
}
