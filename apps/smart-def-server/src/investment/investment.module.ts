import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvestmentModuleBase } from "./base/investment.module.base";
import { InvestmentService } from "./investment.service";
import { InvestmentController } from "./investment.controller";
import { InvestmentResolver } from "./investment.resolver";

@Module({
  imports: [InvestmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvestmentController],
  providers: [InvestmentService, InvestmentResolver],
  exports: [InvestmentService],
})
export class InvestmentModule {}
