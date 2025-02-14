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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsDate,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPaystackPaymentStatus } from "./EnumPaystackPaymentStatus";

@InputType()
class PaystackPaymentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reference?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  paymentDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPaystackPaymentStatus,
  })
  @IsEnum(EnumPaystackPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaystackPaymentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { PaystackPaymentUpdateInput as PaystackPaymentUpdateInput };
