import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: Product['id']): Product | null {
    const product = db.products.find((product) => product.id === id);
    if (!product) {
      return null;
    } else return product;
  }

  public deleteById(id: Product['id']): void {
    db.products = db.products.filter((product) => product.id !== id);
  }

  public create(productData: Omit<Product, 'id'>): Product {
    console.log(productData);
    const newProduct = { ...productData, id: uuidv4() };
    db.products.push(newProduct);
    return newProduct;
  }
}
