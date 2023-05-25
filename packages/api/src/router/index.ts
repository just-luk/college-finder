import { router } from "../trpc";
import { authRouter } from "./auth";
import { collegesRouter } from "./colleges";

export const appRouter = router({
  auth: authRouter,
  colleges: collegesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
