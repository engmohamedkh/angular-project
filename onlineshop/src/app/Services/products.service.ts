// products.service.ts
import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(@Inject(AngularFirestore) private firestore: AngularFirestore) {}

  getProducts(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges({ idField: 'id' });
  }

  addProduct(product: any): Promise<DocumentReference<any>> {
    return this.firestore.collection('products').add(product);
  }

  // Implement update and delete operations if needed
}
