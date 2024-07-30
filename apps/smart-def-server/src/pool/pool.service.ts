import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoolServiceBase } from "./base/pool.service.base";

@Injectable()
export class PoolService extends PoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
