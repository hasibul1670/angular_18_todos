import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private collectionName = 'products'; // Replace with your Firestore collection name

  constructor(private firestore: Firestore) {}

  // Fetch all products
  fetchProducts(): Observable<any[]> {
    const productsCollection = collection(this.firestore, this.collectionName);
    return collectionData(productsCollection) as Observable<any[]>;
  }

  // Fetch a single product by ID
  fetchSingleProduct(id: string): Observable<any> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(productDoc) as Observable<any>;
  }

  // Update a single product by ID
  updateSingleProduct(id: string, productData: any): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return updateDoc(productDoc, productData);
  }

  // Delete a product by ID
  deleteProduct(id: string): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(productDoc);
  }

  // Add a new product
  addProduct(productData: any): Promise<any> {
    const productsCollection = collection(this.firestore, this.collectionName);
    return setDoc(doc(productsCollection), productData); // Automatically generates an ID
  }
}
