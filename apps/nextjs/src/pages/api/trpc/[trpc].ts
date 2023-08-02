import { NextApiRequest, NextApiResponse } from "next";
import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter, createTRPCContext } from "@struct/api";

import { cors } from "../_cors";

// export API handler
// export default createNextApiHandler({
//   router: appRouter,
//   createContext: createTRPCContext,
// });

// If you need to enable cors, you can do so like this:
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Enable cors
  cors(req, res);

  // Let the tRPC handler do its magic
  return createNextApiHandler({
    router: appRouter,
    createContext: createTRPCContext,
  })(req, res);
};

export default handler;
