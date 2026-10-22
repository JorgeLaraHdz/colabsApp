import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonButtons } from '@ionic/angular';
@Component({
  selector: 'app-add-colab',
  templateUrl: './add-colab.page.html',
  styleUrls: ['./add-colab.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton,IonButtons, CommonModule, FormsModule]
})
export class AddColabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
