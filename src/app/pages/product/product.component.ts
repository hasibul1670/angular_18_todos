import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products$!: Observable<any[]>;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.products$ = this.productService.fetchProducts();
  }
}
