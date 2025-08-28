import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  title = '';
  artist = '';
  category = '';
  customCategory = '';
  categories = ['Pop', 'Rock', 'EDM', 'Hip-hop', 'Jazz', 'Other'];
  imgPreview: string | null = null;

  mp3File: File | null = null;
  mp3FileName: string = '';
  mp3FileType: string = '';
  mp3FileSize: string = '';
  mp3Error: string = '';

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleMp3File(files[0]);
    }
  }

  onMp3Change(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.handleMp3File(input.files[0]);
    }
  }

  handleMp3File(file: File) {
    const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg'];
    if (validTypes.includes(file.type)) {
      this.mp3File = file;
      this.mp3FileName = file.name;
      this.mp3FileType = file.type.replace('audio/', '').toUpperCase();
      this.mp3FileSize = this.formatBytes(file.size);
      this.mp3Error = '';
    } else {
      this.mp3Error = 'File must be mp3, wav hoặc ogg!';
      this.mp3File = null;
      this.mp3FileName = '';
      this.mp3FileType = '';
      this.mp3FileSize = '';
    }
  }

  removeMp3(event: Event) {
    event.stopPropagation();
    this.mp3File = null;
    this.mp3FileName = '';
    this.mp3FileType = '';
    this.mp3FileSize = '';
    this.mp3Error = '';
  }

  onImgChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imgPreview = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  removeImg(event: Event) {
    event.stopPropagation();
    this.imgPreview = null;
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  onSubmit() {
    // handle upload logic here
    const finalCategory = this.category === 'Other' ? this.customCategory : this.category;
    alert('Upload submitted!\nCategory: ' + (finalCategory || '(empty)'));
  }
}
