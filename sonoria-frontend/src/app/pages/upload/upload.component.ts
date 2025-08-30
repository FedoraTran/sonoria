import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  title = '';
  artist = '';
  category = '';
  categories = ['Pop', 'Rock', 'EDM', 'Hip-hop', 'Jazz', 'Other'];
  imgPreview: string | null = null;
  customCategory = '';
  mp3Error: string | null = null;
  imgError: string | null = null;
  imgDragOver = false;
  mp3DragOver = false;


  mp3File: File | null = null;
  mp3FileName: string = '';

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.mp3DragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'audio/mp3' || file.type === 'audio/mpeg') {
        this.mp3File = file;
        this.mp3FileName = file.name;
        this.mp3Error = null;
      } else {
        this.mp3Error = 'Please choose a valid MP3 file';
      }
    }
  }

  onMp3DragOver(evt: DragEvent) {
    evt.preventDefault();
    this.mp3DragOver = true;
  }

  onMp3DragLeave(evt: DragEvent) {
    evt.preventDefault();
    this.mp3DragOver = false;
  }

  onMp3Drop(evt: DragEvent) {
    this.onFileDrop(evt);
  }

  onMp3Change(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.type === 'audio/mp3' || file.type === 'audio/mpeg') {
        this.mp3File = file;
        this.mp3FileName = file.name;
        this.mp3Error = null;
      } else {
        this.mp3Error = 'Please choose a valid MP3 file';
      }
    }
  }

  onImgChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.readImageFile(input.files[0]);
    }
  }

  private readImageFile(file: File) {
    this.imgError = null;
    if (!file.type.startsWith('image/')) {
      this.imgError = 'Invalid image file';
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      this.imgPreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  onImgDragOver(evt: DragEvent) {
    evt.preventDefault();
    this.imgDragOver = true;
  }

  onImgDragLeave(evt: DragEvent) {
    evt.preventDefault();
    this.imgDragOver = false;
  }

  onImgDrop(evt: DragEvent) {
    evt.preventDefault();
    this.imgDragOver = false;
    const files = evt.dataTransfer?.files;
    if (files && files.length) {
      this.readImageFile(files[0]);
    }
  }

  onSubmit() {
    const payload = {
      title: this.title,
      artist: this.artist,
      category: this.category === 'Other' ? (this.customCategory || 'Other') : this.category,
      customCategory: this.customCategory || null,
      hasImage: !!this.imgPreview,
      audioFileName: this.mp3FileName || null
    };
  // Log dạng JSON thuần để không hiển thị prototype
  console.log('Upload form data:', JSON.stringify(payload));
  alert('Upload successful');
  }

  removeMp3(evt?: Event) {
    evt?.stopPropagation();
    this.mp3File = null;
    this.mp3FileName = '';
  }

  removeImg(evt?: Event) {
    evt?.stopPropagation();
    this.imgPreview = null;
  this.imgError = null;
  }

  onCategoryChange(value: string) {
    if (value === 'Other') {
      // focus custom category field after view updates
      setTimeout(() => {
        const el = document.querySelector<HTMLInputElement>('input[name="customCategory"]');
        el?.focus();
      });
    } else {
      this.customCategory = '';
    }
  }

  cancelOther() {
    this.category = '';
    this.customCategory = '';
  }
}