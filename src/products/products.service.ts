import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';

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
}