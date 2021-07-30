import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ){}

    async all():  Promise<Product[]>{
        return this.productModel.find().exec();
    }

    async create(data): Promise<Product>{
        return new this.productModel(data).save();
    }

    async getProduct(id: number): Promise<Product>{
        return this.productModel.findOne({id}).exec();
    }

    async updateProduct(id: number, data: {title: string, image: string, likes: number}): Promise<any>{
        return this.productModel.findOneAndUpdate({id}, data)
    }

     async deleteProduct(id: number): Promise<any>{
        return this.productModel.deleteOne({id});
    }
}
