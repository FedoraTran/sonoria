import { Component } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueueComponent } from '../../components/queue/queue.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-playlist',
  imports: [MaterialModule, CommonModule, FormsModule, RouterModule, QueueComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  playlist = [
    {
      id: 1,
      image: "https://i.ytimg.com/vi/zz2lDd2kXeQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWShIMA8=&rs=AOn4CLCsZMgzcGnZ3A2A8-Vcwvw-WwWzbA",
      name: "Âm nhạc thính phòng 1",
      total: "5 song",
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/_pcsfsvLnLE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0XQHOk-w-o5VNZqmdx2MUh-kyUg",
      name: "Âm nhạc thính phòng 2",
      total: "4 song",
    },
    {
      id: 3,
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      name: "Âm nhạc thính phòng 3",
      total: "6 song",
    },
    {
      id: 4,
      image: "https://i.ytimg.com/vi/G63wxOefW_Q/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gTSgdMA8=&rs=AOn4CLAFRnbIrz0VPlr0DAbNYqUQJLX-aA",
      name: "Âm nhạc thính phòng 4",
      total: "9 song",
    },
    {
      id: 5,
      image: "https://i.ytimg.com/vi/rfp3W8S0VFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0wOy2kH8uDB4tcSiMwAZ9skMNlw",
      name: "Tết",
      total: "13 song",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/UvWpK0ljyks/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBty0j1ExGOEKCTn9oiktES8Tth8A",
      name: "Ráp Việt",
      total: "100+ song",
    },
    {
      id: 7,
      image: "https://i.ytimg.com/vi/jfKfPfyJRdk/hq720.jpg?v=67ece60a&sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPKZVoktK9wOhCcsLcYOjKO6UTmw",
      name: "Chill",
      total: "100+ song",
    }
  ];

  showCreateForm = false;
  newPlaylist: any = {
    image: '',
    name: '',
    total: '',
    genre: '',
    tags: '',
    description: '',
    privacy: 'private',
    date: '',
    type: 'Playlist',
    permalink: ''
  };

  onNewClick() {
    this.showCreateForm = true;
    this.newPlaylist = {
      image: '',
      name: '',
      total: '',
      genre: '',
      tags: '',
      description: '',
      privacy: 'private',
      date: '',
      type: 'Playlist',
      permalink: ''
    };
  }

  onCancelCreate() {
    this.showCreateForm = false;
  }

  onSaveCreate() {
    if (!this.newPlaylist.name) return;
    this.playlist.push({
      id: this.playlist.length + 1,
      image: this.newPlaylist.image || 'https://via.placeholder.com/140x140?text=Playlist',
      name: this.newPlaylist.name,
      total: this.newPlaylist.total || '0 song',
    });
    this.showCreateForm = false;
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newPlaylist.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
