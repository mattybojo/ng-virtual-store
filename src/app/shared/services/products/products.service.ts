import { Product } from './../../models/product.model';
import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { convertSnap, convertSnapDoc, convertSnaps } from '../../db-utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private db: AngularFirestore) {}

  getProductById(id: string): Observable<Product> {
    return this.db
      .collection('products')
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((snap: Action<DocumentSnapshot<unknown>>) => {
          const castedSnap = snap as Action<DocumentSnapshot<Product>>;
          return convertSnapDoc<Product>(castedSnap);
        })
      );
  }

  getProducts(): Observable<Product[]> {
    return this.db
      .collection('products')
      .snapshotChanges()
      .pipe(
        map((snaps: DocumentChangeAction<unknown>[]) => {
          const castedSnaps = snaps as DocumentChangeAction<Product>[];
          return convertSnaps<Product>(castedSnaps);
        })
      );
  }
}
