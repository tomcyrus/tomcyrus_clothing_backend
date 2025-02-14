/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CryptoPayment as PrismaCryptoPayment } from "@prisma/client";

export class CryptoPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CryptoPaymentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.cryptoPayment.count(args);
  }

  async cryptoPayments(
    args: Prisma.CryptoPaymentFindManyArgs
  ): Promise<PrismaCryptoPayment[]> {
    return this.prisma.cryptoPayment.findMany(args);
  }
  async cryptoPayment(
    args: Prisma.CryptoPaymentFindUniqueArgs
  ): Promise<PrismaCryptoPayment | null> {
    return this.prisma.cryptoPayment.findUnique(args);
  }
  async createCryptoPayment(
    args: Prisma.CryptoPaymentCreateArgs
  ): Promise<PrismaCryptoPayment> {
    return this.prisma.cryptoPayment.create(args);
  }
  async updateCryptoPayment(
    args: Prisma.CryptoPaymentUpdateArgs
  ): Promise<PrismaCryptoPayment> {
    return this.prisma.cryptoPayment.update(args);
  }
  async deleteCryptoPayment(
    args: Prisma.CryptoPaymentDeleteArgs
  ): Promise<PrismaCryptoPayment> {
    return this.prisma.cryptoPayment.delete(args);
  }
}
