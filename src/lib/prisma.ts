/*
 * File: prisma.ts
 * Project: new
 * Author: Pedro Farias
 * Created: 2026-04-16
 * 
 * Last Modified: Thu Apr 16 2026
 * Modified By: Pedro Farias
 */

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
