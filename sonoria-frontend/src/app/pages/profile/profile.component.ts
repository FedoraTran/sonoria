import { Component } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {SongCardComponent} from '../../components/song-card/song-card.component';

@Component({
  selector: 'app-profile',
  imports: [MaterialModule, SongCardComponent, SongCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: 'DPhan',
    username: 'dphan420',
    location: 'HCM city, VietNam',
    avatar: 'https://hips.hearstapps.com/hmg-prod/images/michael-b-jordan-GettyImages-482462800_1600.jpg?resize=1200:*',
    followers: 1200,
    following: 150,
    playlists: 8
  };


  song = [
    {
      cover: 'https://i.ytimg.com/vi/cL4uhaQ58Rk/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciA0KGMwDw==&rs=AOn4CLAV8yYxQ_kL2iNpETGPHiwLAyfKuw',
      name: 'Lost Stars',
      album: 'Begin Again OST',
      addedDate: '2025-08-20',
      duration: '4:27'
    },
    {
      cover: 'https://i.redd.it/jizzq3ra3zb41.jpg',
      name: 'Blinding Lights',
      album: 'After Hours',
      addedDate: '2025-08-18',
      duration: '3:20'
    },
    {
      cover: 'https://www.love-weymouth.co.uk/wp-content/uploads/2022/01/Shape-of-You-768x768.jpg',
      name: 'Shape of You',
      album: 'Divide',
      addedDate: '2025-08-15',
      duration: '3:53'
    }
  ];
}
