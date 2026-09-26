import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol, IonImg, IonFab,
  IonFabButton, IonIcon, IonCard, IonButton
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trashOutline } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonImg, IonFab,
    IonFabButton, IonIcon, IonCard, IonButton
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Mi Galería</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          @for (photo of photoService.photos(); track photo.filepath; let i = $index) {
            <ion-col size="12" size-md="6">
              <ion-card>
                <ion-img [src]="photo.webPath"></ion-img>
                <ion-button color="danger" expand="block" (click)="photoService.deletePhoto(i)">
                  <ion-icon slot="start" name="trash-outline"></ion-icon>
                  Eliminar
                </ion-button>
              </ion-card>
            </ion-col>
          } @empty {
            <ion-col size="12" class="ion-text-center">
              <p>No hay fotos aún. Toca el botón para capturar una.</p>
            </ion-col>
          }
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button (click)="takePhoto()">
          <ion-icon name="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  `
})
export class HomePage {
  public photoService = inject(PhotoService);

  constructor() {
    addIcons({ camera, trashOutline });
  }

  async takePhoto() {
    await this.photoService.takeNewPhoto();
  }
}