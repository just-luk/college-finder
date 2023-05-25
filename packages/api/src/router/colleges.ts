import { router, protectedProcedure } from "../trpc";
import { z } from "zod";

export const collegesRouter = router({
    byId: protectedProcedure.input(z.number()).query(({ ctx, input }) => {
        return ctx.prisma.colleges.findFirst({ where: { unitid: input } });
    }),
    byName: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
        return ctx.prisma.colleges.findFirst({ where: { name: input } });
    }),
    allNames: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.colleges.findMany({ select: { name: true } });
    }
    ),
})