import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonButtons,IonIcon, IonButton, IonLabel, IonInput, IonSelect } from '@ionic/angular';
import { personCircle, chevronBackOutline,cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-add-colab',
  templateUrl: './add-colab.page.html',
  styleUrls: ['./add-colab.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonButtons,IonIcon,IonButton,IonLabel,IonInput,IonSelect, CommonModule, FormsModule]
})
export class AddColabPage implements OnInit {

  constructor() {
    addIcons({
      'person-circle': personCircle,
      'chevron-back-outline': chevronBackOutline,
      'camera-outline': cameraOutline
    });
   }

  ngOnInit() {
  }

}
