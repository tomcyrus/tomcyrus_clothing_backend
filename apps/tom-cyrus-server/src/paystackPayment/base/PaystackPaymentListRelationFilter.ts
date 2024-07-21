/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaystackPaymentWhereInput } from "./PaystackPaymentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaystackPaymentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaystackPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => PaystackPaymentWhereInput)
  @IsOptional()
  @Field(() => PaystackPaymentWhereInput, {
    nullable: true,
  })
  every?: PaystackPaymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaystackPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => PaystackPaymentWhereInput)
  @IsOptional()
  @Field(() => PaystackPaymentWhereInput, {
    nullable: true,
  })
  some?: PaystackPaymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaystackPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => PaystackPaymentWhereInput)
  @IsOptional()
  @Field(() => PaystackPaymentWhereInput, {
    nullable: true,
  })
  none?: PaystackPaymentWhereInput;
}
export { PaystackPaymentListRelationFilter as PaystackPaymentListRelationFilter };
