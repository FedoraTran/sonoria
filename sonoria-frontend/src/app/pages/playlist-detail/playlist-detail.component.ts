import { Component } from '@angular/core';
import { Song } from '../../shared/modules/song.module';
import {MaterialModule} from '../../shared/modules/material.module';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { NextUpComponent } from '../../components/next-up/next-up.component';

@Component({
  selector: 'app-playlist-detail',
  imports: [MaterialModule, SongCardComponent, NextUpComponent],
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent {
  playlist = {
    title: 'My Playlist',
    owner: 'DPhan',
    cover: '' // để bind ảnh đại diện playlist
  };

  songs: Song[] = [
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b273fbb2a1cf1c7f4a9bb40f74c8',
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      addedDate: new Date(2025, 0, 12),
      duration: '3:20'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b273e5c1d1a6b5b7c6ad4d4b2f6e',
      name: 'Die For You',
      artist: 'The Weeknd',
      addedDate: new Date(2025, 0, 15),
      duration: '4:05'
    }
    // ... thêm bài khác
  ];

  // ✅ Hàm chọn ảnh cover
  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.playlist.cover = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
