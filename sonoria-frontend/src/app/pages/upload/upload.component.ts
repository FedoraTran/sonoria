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
  categories = ['Pop', 'Rock', 'EDM', 'Hip-hop', 'Jazz', 'Other'];
  imgPreview: string | null = null;


  mp3File: File | null = null;
  mp3FileName: string = '';

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'audio/mp3' || file.type === 'audio/mpeg') {
        this.mp3File = file;
        this.mp3FileName = file.name;
      } else {
        alert('Please upload an mp3 file.');
      }
    }
  }

  onMp3Change(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.type === 'audio/mp3' || file.type === 'audio/mpeg') {
        this.mp3File = file;
        this.mp3FileName = file.name;
      } else {
        alert('Please upload an mp3 file.');
      }
    }
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

  onSubmit() {
    // handle upload logic here
    alert('Upload submitted!');
  }
}
