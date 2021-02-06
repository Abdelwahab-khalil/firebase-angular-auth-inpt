import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6YwPMxClM3cuK78Q5MUSpHtTqXi1RqMo",
      authDomain: "fir-angular-auth-a17e4.firebaseapp.com",
      projectId: "fir-angular-auth-a17e4",
      storageBucket: "fir-angular-auth-a17e4.appspot.com",
      messagingSenderId: "372624390874",
      appId: "1:372624390874:web:15ce440431de5b8f8603e3"
    }
    )
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
