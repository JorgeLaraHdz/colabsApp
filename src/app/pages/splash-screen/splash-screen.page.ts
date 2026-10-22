import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonButton, LoadingController } from '@ionic/angular';
import { businessSharp } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  imports: [IonIcon, IonIcon, IonContent, CommonModule, FormsModule, IonButton]
})
export class SplashScreenPage implements OnInit {
  private router = inject(Router);
  private loadingCtrl = inject(LoadingController);

  constructor() {
    addIcons({
      'business-sharp': businessSharp
    });
  }

  ngOnInit() {
    console.log('SplashScreenPage initialized');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }

  colaboradores() {
    this.showLoading();
    this.router.navigate(['/tabs/tab1']);
  }
}