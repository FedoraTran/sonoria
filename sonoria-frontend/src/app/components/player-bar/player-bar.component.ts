import { Component } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';

@Component({
  selector: 'app-player-bar',
  imports: [MaterialModule],
  templateUrl: './player-bar.component.html',
  styleUrl: './player-bar.component.scss'
})
export class PlayerBarComponent {
  isPlaying = false;

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }
}