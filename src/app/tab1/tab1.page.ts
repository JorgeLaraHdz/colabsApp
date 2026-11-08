import { Component, inject } from '@angular/core';
import { IonHeader,IonFab,IonFabButton, IonToolbar, IonTitle, IonContent, IonSearchbar,IonIcon,IonButton,IonList,IonItem,IonAvatar,IonLabel } from '@ionic/angular';
import {businessSharp,add} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import { Router } from '@angular/router';
import { Colabs } from '../services/colabs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonFab, IonFabButton, IonAvatar, IonItem, IonList, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,IonLabel],
})
export class Tab1Page {
  private router = inject(Router);
  private colabs = inject(Colabs);
  listaColabs:any[]=[]
  ngOnInit() {
    this.colabs.getColabs().subscribe((data)=>{
      console.log(data.Respuesta[0].strNombre)
      this.listaColabs=data.Respuesta
    })
  }

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
