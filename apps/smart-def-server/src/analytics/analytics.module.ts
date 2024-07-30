import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsModuleBase } from "./base/analytics.module.base";
import { AnalyticsService } from "./analytics.service";
import { AnalyticsController } from "./analytics.controller";
import { AnalyticsResolver } from "./analytics.resolver";

@Module({
  imports: [AnalyticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsResolver],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
