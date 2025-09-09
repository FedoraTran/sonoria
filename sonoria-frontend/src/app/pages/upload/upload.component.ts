import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {Observable, Subscription} from 'rxjs';
import {CategoryModel} from '../../models/category.model';
import {Store} from '@ngrx/store';
import {TrackState} from '../../ngrx/track/track.state';
import {CategoryState} from '../../ngrx/category/category.state';
import * as trackActions from '../../ngrx/track/track.action';
import * as categoryActions from '../../ngrx/category/category.action';

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
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent implements OnInit, OnDestroy{
  categories$!: Observable<CategoryModel[]>;
  categories: CategoryModel[] = [];
  imgPreview: string | null = null;
  mp3Error: string | null = null;
  imgError: string | null = null;
  imgDragOver = false;
  mp3DragOver = false;
  subscriptions: Subscription[] = [];

  mp3File: File | null = null;
  mp3FileName: string = '';

  constructor(
    private store: Store<{
      track: TrackState,
      category: CategoryState
    }>,
  ) {
  }

  ngOnInit() {
    this.categories$ = this.store.select('category', 'categoryList');

    this.store.dispatch(categoryActions.getAllCategories());

    this.subscriptions.push(
      this.categories$.subscribe(categories => {
        this.categories = categories;
        console.log(this.categories);
      })
    );
  }

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

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lyrics: new FormControl('', Validators.maxLength(5000)),
    artist: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    categoryId: new FormControl('', Validators.required),
    file: new FormControl<File | null>(null, Validators.required),
    thumbnail: new FormControl<File | null>(null, Validators.required),
    lyricsFile: new FormControl<File | null>(null)
  });

  private originalFileName: string | null = null;


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
        this.form.patchValue({ file });   // ✅ cập nhật vào form
      } else {
        this.mp3Error = 'Please choose a valid MP3 file';
        this.form.patchValue({ file: null });
      }
    }
  }

  onImgChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.readImageFile(file);
      this.form.patchValue({ thumbnail: file });   // ✅ cập nhật vào form
    }
  }

  onImgDrop(evt: DragEvent) {
    evt.preventDefault();
    this.imgDragOver = false;
    const files = evt.dataTransfer?.files;
    if (files && files.length) {
      this.readImageFile(files[0]);
      this.form.patchValue({ thumbnail: files[0] });   // ✅ cập nhật vào form
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

  onSubmit() {
    if (this.form.invalid) {
      console.log('Form is invalid', this.form.errors, this.form.value);
      return;
    }

    const { file, thumbnail, title, categoryId, artist, lyrics } = this.form.value;

    this.store.dispatch(
      trackActions.uploadTrack({
        file: file!,
        originalFileName: file?.name || '',
        thumbnail: this.form.value.thumbnail!,
        title: title || '',
        categoryId: categoryId || '',
        artists: artist || '',
        lyrics: lyrics || '',
      })
    );
    console.log('Form submitted', this.form.value);
  }


  removeMp3(evt?: Event) {
    evt?.stopPropagation();
    this.mp3File = null;
    this.mp3FileName = '';
    this.form.patchValue({ file: null });   // ✅ clear trong form
  }

  removeImg(evt?: Event) {
    evt?.stopPropagation();
    this.imgPreview = null;
    this.imgError = null;
    this.form.patchValue({ thumbnail: null });   // ✅ clear trong form
  }


  resetForm() {
    this.form.reset();
    this.removeMp3();
    this.removeImg();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
