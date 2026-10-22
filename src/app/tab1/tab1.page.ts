import { Component, inject } from '@angular/core';
import { IonHeader,IonFab,IonFabButton, IonToolbar, IonTitle, IonContent, IonSearchbar,IonIcon,IonButton,IonList,IonItem,IonAvatar,IonLabel } from '@ionic/angular';
import {businessSharp,add} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonFab, IonFabButton, IonAvatar, IonItem, IonList, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,IonLabel],
})
export class Tab1Page {
  private loadingController = inject(LoadingController);
  sihay=true
  constructor() {
    addIcons({
      'business-sharp': businessSharp,
      'add': add
    });
  }
  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      message: 'Cargando información...',
      spinner: 'crescent'
    });

    await loading.present();

    // Esperar 3 segundos para comprobar que funciona
    await new Promise(resolve => setTimeout(resolve, 3000));

    await loading.dismiss();
  }
}
