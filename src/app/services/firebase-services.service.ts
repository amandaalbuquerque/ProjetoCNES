import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServices {

  constructor( public firestore: AngularFirestore ) { 

  }
  getcnes() { 
    return this.firestore.collection('cnes').get();
  }
}
