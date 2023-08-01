import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

import { type AppRouter } from "./src/root";

export { appRouter, type AppRouter } from "./src/root";
export { createTRPCContext } from "./src/trpc";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;

// for global typing:
export { type Auth } from "./lucia";
export type { Session, User } from "lucia";
