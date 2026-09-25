import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonCard, IonCardContent, IonButton, IonToggle, IonBadge, IonChip,
  IonInput, IonCheckbox, IonRange, IonProgressBar
} from '@ionic/angular';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.page.html',
  styleUrls: ['./component-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
    IonCard, IonCardContent, IonButton, IonToggle, IonBadge, IonChip,
    IonInput, IonCheckbox, IonRange, IonProgressBar
  ]
})
export class ComponentDetailPage {
  nombre: string = '';

  constructor(private route: ActivatedRoute) {
    this.nombre = this.route.snapshot.paramMap.get('id') || '';
  }
}