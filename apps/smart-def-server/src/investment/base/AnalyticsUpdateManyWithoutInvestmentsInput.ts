/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnalyticsWhereUniqueInput } from "../../analytics/base/AnalyticsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AnalyticsUpdateManyWithoutInvestmentsInput {
  @Field(() => [AnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalyticsWhereUniqueInput],
  })
  connect?: Array<AnalyticsWhereUniqueInput>;

  @Field(() => [AnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalyticsWhereUniqueInput],
  })
  disconnect?: Array<AnalyticsWhereUniqueInput>;

  @Field(() => [AnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalyticsWhereUniqueInput],
  })
  set?: Array<AnalyticsWhereUniqueInput>;
}

export { AnalyticsUpdateManyWithoutInvestmentsInput as AnalyticsUpdateManyWithoutInvestmentsInput };
