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
import { CryptoPaymentWhereInput } from "./CryptoPaymentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CryptoPaymentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CryptoPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => CryptoPaymentWhereInput)
  @IsOptional()
  @Field(() => CryptoPaymentWhereInput, {
    nullable: true,
  })
  every?: CryptoPaymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CryptoPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => CryptoPaymentWhereInput)
  @IsOptional()
  @Field(() => CryptoPaymentWhereInput, {
    nullable: true,
  })
  some?: CryptoPaymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CryptoPaymentWhereInput,
  })
  @ValidateNested()
  @Type(() => CryptoPaymentWhereInput)
  @IsOptional()
  @Field(() => CryptoPaymentWhereInput, {
    nullable: true,
  })
  none?: CryptoPaymentWhereInput;
}
export { CryptoPaymentListRelationFilter as CryptoPaymentListRelationFilter };
