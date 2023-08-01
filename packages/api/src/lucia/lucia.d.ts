// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
	type Auth = import("./index.ts").Auth;
	type DatabaseUserAttributes = Omit<import("@struct/db").AuthUser, "id">;
	type DatabaseSessionAttributes = {};
}
