import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async all(){
        return this.productsService.all();
    }

    @EventPattern('product_created')
    async create(product){
        await this.productsService.create({
            id: product.id, 
            title: product.title, 
            image: product.image,
            likes: product.likes
        });
    }
    @EventPattern('product_updated')
    async updateProduct(product){
        return this.productsService.updateProduct(product.id, {
             title: product.title, 
            image: product.image,
            likes: product.likes
        })
    }

    @EventPattern('product_deleted')
    async deleteProduct(data){
        return this.productsService.deleteProduct(data);
    }
   
}
