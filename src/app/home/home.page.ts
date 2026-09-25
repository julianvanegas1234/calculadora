import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { appsOutline } from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonIcon, IonAvatar
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonIcon, IonAvatar
  ]
})
export class HomePage {
  constructor() {
    addIcons({ appsOutline });
  }

  componentes: string[] = [
    'accordion', 'action-sheet', 'alert', 'avatar', 'badge',
    'breadcrumbs', 'button', 'card', 'checkbox', 'chip',
    'datetime', 'fab', 'grid', 'icon', 'img',
    'infinite-scroll', 'input', 'item', 'label', 'list',
    'loading', 'menu', 'modal', 'progress-bar', 'radio',
    'range', 'refresher', 'searchbar', 'segment', 'select',
    'skeleton-text', 'slides', 'spinner', 'tabs', 'textarea',
    'toast', 'toggle'
  ];
}