import {Component} from '@angular/core';
import * as firebase from 'firebase';
import {apiFirebase} from '../environments/firebase';

const firebaseConfig = {
  apiKey: apiFirebase.apiKey,
  authDomain: apiFirebase.authDomain,
  databaseURL: apiFirebase.databaseURL,
  projectId: apiFirebase.projectId,
  storageBucket: apiFirebase.storageBucket,
  messagingSenderId: apiFirebase.messagingSenderId,
  appId: apiFirebase.appId
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oc-angular-books-app';

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
