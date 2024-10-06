import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from '@gstore/core';
import { ProductPrisma } from './product.prisma';

@Controller('products')
export class ProductController {
  constructor(readonly repo: ProductPrisma) {}

  @Post()
  async saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getById(Number(id));
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.exclude(Number(id));
  }
}
