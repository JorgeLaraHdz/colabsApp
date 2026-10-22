import { Component, inject } from '@angular/core';
import { IonHeader,IonFab,IonFabButton, IonToolbar, IonTitle, IonContent, IonSearchbar,IonIcon,IonButton,IonList,IonItem,IonAvatar,IonLabel } from '@ionic/angular';
import {businessSharp,add} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonFab, IonFabButton, IonAvatar, IonItem, IonList, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,IonLabel],
})
export class Tab1Page {
  private router = inject(Router);
  sihay=true
  constructor() {
    addIcons({
      'business-sharp': businessSharp,
      'add': add
    });
  }
  addColab(){
    this.router.navigate(['/add-colab']);
  }
}
