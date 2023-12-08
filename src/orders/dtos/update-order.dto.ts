/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;
 }
