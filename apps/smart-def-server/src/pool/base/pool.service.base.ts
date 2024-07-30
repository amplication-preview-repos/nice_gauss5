/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Pool as PrismaPool,
  Investment as PrismaInvestment,
} from "@prisma/client";

export class PoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PoolCountArgs, "select">): Promise<number> {
    return this.prisma.pool.count(args);
  }

  async pools(args: Prisma.PoolFindManyArgs): Promise<PrismaPool[]> {
    return this.prisma.pool.findMany(args);
  }
  async pool(args: Prisma.PoolFindUniqueArgs): Promise<PrismaPool | null> {
    return this.prisma.pool.findUnique(args);
  }
  async createPool(args: Prisma.PoolCreateArgs): Promise<PrismaPool> {
    return this.prisma.pool.create(args);
  }
  async updatePool(args: Prisma.PoolUpdateArgs): Promise<PrismaPool> {
    return this.prisma.pool.update(args);
  }
  async deletePool(args: Prisma.PoolDeleteArgs): Promise<PrismaPool> {
    return this.prisma.pool.delete(args);
  }

  async findInvestments(
    parentId: string,
    args: Prisma.InvestmentFindManyArgs
  ): Promise<PrismaInvestment[]> {
    return this.prisma.pool
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .investments(args);
  }
}
