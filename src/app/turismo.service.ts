import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TurismoService {

  constructor(private firestore: AngularFirestore) {}

  createCliente(record: unknown) {
    return this.firestore.collection('Cliente').add(record);
  }
  readCliente(){
    return this.firestore.collection('Cliente').snapshotChanges();
  }
}
