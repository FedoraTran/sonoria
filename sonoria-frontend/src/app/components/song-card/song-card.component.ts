import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input() song!: {
    name: string;
    album: string;
    addedDate: string;
    duration: string;
    cover?: string;
  };
}
