import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { v4 as uuidv4 } from 'uuid'; // Import uuid only if you're using it for new products, not edits.

@Component({
  selector: 'app-product-edit-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css'],
})
export class ProductEditFormComponent {
  @Input() isOpen: boolean = false;
  @Input() productToEdit: {
    name: string;
    price: string;
    description: string;
    inStock: boolean;
    quantity: number;
    id: string;
  } | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() editProduct = new EventEmitter<{
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

  ngOnChanges() {
    if (this.productToEdit) {
      this.productName = this.productToEdit.name;
      this.productPrice = this.productToEdit.price;
      this.productDescription = this.productToEdit.description;
      this.inStock = this.productToEdit.inStock;
      this.productQuantity = this.productToEdit.quantity;
    }
  }

  onEditProduct() {
    if (this.productName && this.productPrice) {
      const updatedProduct = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
        inStock: this.inStock,
        quantity: this.productQuantity,
        id: this.productToEdit ? this.productToEdit.id : uuidv4(), // Keep the same ID for editing
      };
      this.editProduct.emit(updatedProduct);
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
