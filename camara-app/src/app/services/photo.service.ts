import { Injectable, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photosSignal = signal<UserPhoto[]>([]);
  public readonly photos = this.photosSignal.asReadonly();

  async takeNewPhoto(): Promise<void> {
    try {
      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 85
      });

      const newPhoto: UserPhoto = {
        filepath: `${Date.now()}.${capturedPhoto.format}`,
        webPath: capturedPhoto.webPath,
        format: capturedPhoto.format
      };

      this.photosSignal.update(photos => [newPhoto, ...photos]);
    } catch (error) {
      console.log('El usuario canceló o hubo un error', error);
    }
  }

  deletePhoto(index: number): void {
    this.photosSignal.update(photos => photos.filter((_, i) => i !== index));
  }
}