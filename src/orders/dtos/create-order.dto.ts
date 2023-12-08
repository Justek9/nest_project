/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
}
