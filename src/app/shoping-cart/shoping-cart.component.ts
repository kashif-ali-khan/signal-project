import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

export interface Product {
  id?: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule, SharedModule], // Import the SharedModule here

  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.scss',
})
export class ShopingCartComponent {
  cartArray = signal<Product[]>([
    {
      id: 2,
      name: 'Samsung S23',
      price: 145000,
    },
    {
      id: 3,
      name: 'Iphone 15',
      price: 68000,
    },
    {
      id: 4,
      name: 'One plus 12',
      price: 57000,
    },
  ]);

  constructor() {}

  totalValue = computed(() => {
    return this.cartArray().reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  });

  addToCart(product: Product) {
    if (product.name && product.name) {
      this.cartArray.update((p) =>
        p.concat({ ...product, price: +product.price })
      );
    }
  }

  removeItem(index: number) {
    this.cartArray.update((p) => {
      p.splice(index, 1);
      return [...p];
    });
  }
}
