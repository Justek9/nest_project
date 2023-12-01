import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ProductsService } from './products.service';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = this.productsService.getById(id);
    if (!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    this.productsService.deleteById(id);
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');
    return { success: true };
  }

  @Post()
  create(@Body() productsData: CreateProductDTO) {
    return this.productsService.create(productsData);
  }

  @Put('/id')
  updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    if (!this.productsService.getById(id))
      throw new NotFoundException('Product not found');
    this.productsService.updateById(id, productData);
    return { succes: true };
  }
}
