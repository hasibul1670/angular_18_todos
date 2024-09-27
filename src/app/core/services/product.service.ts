import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private collectionName = 'products';
  constructor(private firestore: Firestore) {}
  fetchProducts(): Observable<any[]> {
    const productsCollection = collection(this.firestore, this.collectionName);
    return collectionData(productsCollection, { idField: 'id' }) as Observable<
      any[]
    >;
  }

  fetchSingleProduct(id: string): Observable<any> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(productDoc) as Observable<any>;
  }
  updateSingleProduct(id: string, productData: any): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);

    return docData(productDoc)
      .pipe(
        take(1),
        tap((doc) => {
          if (!doc) {
            throw new Error(`No document found with ID: ${id}`);
          }
        })
      )
      .toPromise()
      .then(() => {
        return updateDoc(productDoc, productData);
      })
      .catch((error: any) => {
        console.error('Error updating product: ', error);
        throw error;
      });
  }

  deleteProduct(id: string): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(productDoc).catch((error) => {
      console.error('Error deleting product: ', error);
      throw error; // Re-throw if you want to handle it further up
    });
  }

  addProduct(productData: any): Promise<any> {
    const productsCollection = collection(this.firestore, this.collectionName);
    return setDoc(doc(productsCollection), productData);
  }
}
