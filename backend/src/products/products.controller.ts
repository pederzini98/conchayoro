import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }
  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product | null> {
    return this.productsService.findOne(id);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    return this.productsService.update(id, updateProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }
  @Get()
findByCriteria(@Body() criteria: any): Promise<Product[]> {
return this.productsService.findByCriteria(criteria);
}
}