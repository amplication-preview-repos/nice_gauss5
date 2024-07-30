/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { AnalyticsFindManyArgs } from "../../analytics/base/AnalyticsFindManyArgs";
import { Analytics } from "../../analytics/base/Analytics";
import { AnalyticsWhereUniqueInput } from "../../analytics/base/AnalyticsWhereUniqueInput";
import { InvestmentFindManyArgs } from "../../investment/base/InvestmentFindManyArgs";
import { Investment } from "../../investment/base/Investment";
import { InvestmentWhereUniqueInput } from "../../investment/base/InvestmentWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";
import { UserProfileFindManyArgs } from "../../userProfile/base/UserProfileFindManyArgs";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        balance: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        balance: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        balance: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          balance: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          balance: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/analyticsItems")
  @ApiNestedQuery(AnalyticsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Analytics",
    action: "read",
    possession: "any",
  })
  async findAnalyticsItems(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Analytics[]> {
    const query = plainToClass(AnalyticsFindManyArgs, request.query);
    const results = await this.service.findAnalyticsItems(params.id, {
      ...query,
      select: {
        analysisDate: true,
        createdAt: true,
        id: true,

        investment: {
          select: {
            id: true,
          },
        },

        profit: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectAnalyticsItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateAnalyticsItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/analyticsItems")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectAnalyticsItems(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AnalyticsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      analyticsItems: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/investments")
  @ApiNestedQuery(InvestmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Investment",
    action: "read",
    possession: "any",
  })
  async findInvestments(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Investment[]> {
    const query = plainToClass(InvestmentFindManyArgs, request.query);
    const results = await this.service.findInvestments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        investmentDate: true,

        pool: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/investments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/investments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/investments")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectInvestments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InvestmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      investments: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/transactions")
  @ApiNestedQuery(TransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactions(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        transactionDate: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectTransactions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateTransactions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectTransactions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userProfiles")
  @ApiNestedQuery(UserProfileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async findUserProfiles(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserProfile[]> {
    const query = plainToClass(UserProfileFindManyArgs, request.query);
    const results = await this.service.findUserProfiles(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        settings: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userProfiles")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectUserProfiles(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}