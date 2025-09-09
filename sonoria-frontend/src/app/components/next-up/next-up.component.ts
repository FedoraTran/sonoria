import { Component } from '@angular/core';
import { Track } from '../../shared/modules/track.module';

@Component({
  selector: 'app-next-up',
  templateUrl: './next-up.component.html',
  styleUrls: ['./next-up.component.scss']
})

export class NextUpComponent {
  tracks: Track[] = [
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b273d4a8c83b0a2a9e2c7d51e6df',
      name: 'As It Was',
      artist: 'Harry Styles'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b27340d4b52a8e2e01d3f3b2f4d7',
      name: 'Industry Baby',
      artist: 'Lil Nas X, Jack Harlow'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b2735d5a2a42d4b13c34c6a8b3db',
      name: 'Good 4 U',
      artist: 'Olivia Rodrigo'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b2738c32e6ad53c6f3b77e8f7d95',
      name: 'Bad Habits',
      artist: 'Ed Sheeran'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b2739b3c9a2b9ef9c5a8b3a8e92a',
      name: 'Kiss Me More',
      artist: 'Doja Cat, SZA'
    },
    {
      cover: 'https://i.scdn.co/image/ab67616d0000b273f4a0c02f6a1e1d3f7e2a7b44',
      name: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber'
    }
  ];
}
