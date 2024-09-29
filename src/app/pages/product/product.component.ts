import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { NgxSonnerToaster } from 'ngx-sonner';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from '../../core/services/notification.service';
import { ProductService } from '../../core/services/product.service';
import { ProductEditFormComponent } from '../product-edit-form/product-edit-form.component';
import { ProductModalComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressBarModule,
    NgxSonnerToaster,
    ProductModalComponent,
    ProductEditFormComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products$ = new BehaviorSubject<any[]>([]);
  singleProducts: {
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  } | null = null;
  id: string | null = null;
  searchText: string | null = null;
  products: {
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  }[] = [];
  isModalOpen = false;
  isEditProductModal = false;
  isDeletePopupOpen = false;

  filterAmount: number | null = null;
  formatLabel(value: number): string {
    this.filterAmount = value;
    if (value >= 20000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.productService.fetchProducts().subscribe((products) => {
      this.products$.next(products);
    });
  }

  editProduct(product: {
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  }) {
    this.productService
      .updateSingleProduct(product.id, product)
      .then(() => {
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products[index] = product;
        }
        this.products$.next([...this.products]);
        this.notificationService.showSuccess('Product edited successfully!');
        this.isModalOpen = false;
      })
      .catch((err) => {
        this.notificationService.showError('Failed to edit product.');
        console.log('Error editing product:', err);
      });
  }

  deletePopup(id: any) {
    this.id = id;
    this.isDeletePopupOpen = true;
  }

  
  deleteProduct() {
    this.productService
      .deleteProduct(this.id!)
      .then(() => {
        const index = this.products.findIndex((p) => p.id === this.id);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
        // Update the observable with the new products array
        this.products$.next([...this.products]);
        this.notificationService.showSuccess('Product deleted successfully!');
        this.isDeletePopupOpen = false;
      })
      .catch((err) => {
        this.notificationService.showError('Failed to delete product.');
        console.error('Error deleting product:', err);
        this.isDeletePopupOpen = false;
      });
  }

  addProduct(product: {
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  }) {
    this.productService
      .addProduct(product)
      .then((products) => {
        this.products$.next(products);
        this.notificationService.showSuccess('Product added successfully!');
        this.products.push(product);
        this.isModalOpen = false;
      })
      .catch((err) => {
        this.notificationService.showError('Failed to add product.');
        console.error('Error adding product:', err);
      });
  }

  openModal() {
    this.isModalOpen = true;
  }
  editProductModal(product: any) {
    this.singleProducts = product;
    this.isEditProductModal = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  closeDeletePopup() {
    this.isDeletePopupOpen = false;
  }
  closeEditModal() {
    this.isEditProductModal = false;
  }
}
