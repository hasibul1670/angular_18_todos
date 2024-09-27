import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { v4 as uuidv4 } from 'uuid';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ 
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addProduct = new EventEmitter<{
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  }>();

  productName: string = '';
  productPrice: string = '';
  productDescription: string = '';
  inStock: boolean = true;
  productQuantity: number = 1; 
  onAddProduct() {
    if (this.productName && this.productPrice) {
      const newProduct = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
        inStock: this.inStock,
        quantity: this.productQuantity,
        id: uuidv4(),
      };
      this.addProduct.emit(newProduct);
      this.resetForm();
      this.close.emit();
    }
  }

  private resetForm() {
    this.productName = '';
    this.productPrice = '';
    this.productDescription = '';
    this.inStock = true; 
    this.productQuantity = 1; 
  }
}
