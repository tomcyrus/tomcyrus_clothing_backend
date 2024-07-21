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
import { CartItemService } from "../cartItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CartItemCreateInput } from "./CartItemCreateInput";
import { CartItem } from "./CartItem";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemWhereUniqueInput } from "./CartItemWhereUniqueInput";
import { CartItemUpdateInput } from "./CartItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CartItemControllerBase {
  constructor(
    protected readonly service: CartItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CartItem })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CartItemCreateInput,
  })
  async createCartItem(
    @common.Body() data: CartItemCreateInput
  ): Promise<CartItem> {
    return await this.service.createCartItem({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        user: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CartItem] })
  @ApiNestedQuery(CartItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cartItems(@common.Req() request: Request): Promise<CartItem[]> {
    const args = plainToClass(CartItemFindManyArgs, request.query);
    return this.service.cartItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        user: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cartItem(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    const result = await this.service.cartItem({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        user: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CartItemUpdateInput,
  })
  async updateCartItem(
    @common.Param() params: CartItemWhereUniqueInput,
    @common.Body() data: CartItemUpdateInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.updateCartItem({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,

          user: {
            select: {
              id: true,
            },
          },

          product: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCartItem(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.deleteCartItem({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,

          user: {
            select: {
              id: true,
            },
          },

          product: {
            select: {
              id: true,
            },
          },
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
}
