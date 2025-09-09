import { Component } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {SongCardComponent} from '../../components/song-card/song-card.component';
import { Song } from '../../shared/modules/song.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [
    MaterialModule,
    SongCardComponent
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'DPhan',
    username: 'dphan420',
    location: 'HCM city, VietNam',
    avatar: 'https://tse3.mm.bing.net/th/id/OIP.6R5GPfK5NJhoVHXj0auVmwHaHb?pid=Api&P=0&h=180'
  };

  songs: Song[] = [
    {
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      cover: 'https://tse2.mm.bing.net/th/id/OIP.5hpa7p-l-rgKjZJ63iU26gAAAA?pid=Api&P=0&h=180',
      addedDate: new Date('2025-01-12'),
      duration: '3:20'
    },
    {
      name: 'Die For You',
      artist: 'The Weeknd',
      cover: 'https://tse4.mm.bing.net/th/id/OIP.00K55CMEc_gsSO0b1PTvTAHaEK?pid=Api&P=0&h=180',
      addedDate: new Date('2025-01-15'),
      duration: '4:05'
    },
    {
      name: 'Peaches',
      artist: 'Justin Bieber',
      cover: 'https://tse4.mm.bing.net/th/id/OIP.p_b0-8wYuZuJtu1m8J8WOgHaKy?pid=Api&P=0&h=180',
      addedDate: new Date('2025-02-01'),
      duration: '3:18'
    },
    {
      name: 'Save Your Tears',
      artist: 'The Weeknd',
      cover: 'https://tse4.mm.bing.net/th/id/OIP.TZ2JK-OoeLqqkQW_gAQHMAHaFj?pid=Api&P=0&h=180',
      addedDate: new Date('2025-02-05'),
      duration: '3:35'
    },
    {
      cover: 'https://tse2.mm.bing.net/th/id/OIP.J-z8JrhX2EhcIfugldA8sQHaHa?pid=Api&P=0&h=180',
      name: 'Shape of You',
      artist: 'Ed Sheeran',
      addedDate: new Date(2025, 1, 8),
      duration: '3:53'
    },
    {
      cover: 'https://tse3.mm.bing.net/th/id/OIP.Vz7HTFB7qCVmoMyvR_wslAHaHa?pid=Api&P=0&h=180',
      name: 'Levitating',
      artist: 'Dua Lipa',
      addedDate: new Date(2025, 1, 12),
      duration: '3:23'
    },
    {
      cover: 'https://tse4.mm.bing.net/th/id/OIP.2b49jg3RTUotEwRD_JV7WQHaHa?pid=Api&P=0&h=180',
      name: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      addedDate: new Date(2025, 1, 15),
      duration: '2:21'
    }
  ];
}
