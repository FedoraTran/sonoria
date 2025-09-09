import { Component, Input } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import { Song } from '../../shared/modules/song.module';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-song-card',
  imports: [MaterialModule, DatePipe],
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  @Input() song!: Song;
}
