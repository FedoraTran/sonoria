import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './song-detail.component.html',
  styleUrl: './song-detail.component.scss'
})
export class SongDetailComponent implements OnInit {
  song = {
    title: 'Fire On Fire',
    artist: 'Sam Smith',
    album: 'Stay with me……',
    composer: 'Sam Smith',
    uploader: 'MaiNgoc',
    coverUrl: 'https://i.ytimg.com/vi/vk_xq1P7vIU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBGGlCTV8gKUrgbafL62l0GCLqpaw',
    liked: false,
    rating: 0,
    lyrics: '', // sẽ load từ file txt
  };

  isPlaying = false; // trạng thái phát / tạm dừng

  comments = [
    {
      user: '@tranpham5678',
      timeAgo: '3 years ago',
      avatar: 'https://i.pravatar.cc/64?img=12',
      text: 'Lâu nghe lại vẫn như cảm xúc ban đầu.'
    },
    {
      user: '@_LeNguyenTrucMai',
      timeAgo: '5 years ago',
      avatar: 'https://i.pravatar.cc/64?img=25',
      text: 'Lời bài hát này thật là romantic nhất mà tôi từng thấy'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadLyricsFromFile();
  }

  private loadLyricsFromFile() {
    // file đặt trong thư mục public => truy cập trực tiếp
    this.http.get('fire-on-fire.txt', { responseType: 'text' }).subscribe({
      next: raw => {
        let text = raw.replace(/\r\n?/g, '\n');
        // Sửa các chỗ bị dính dòng cụ thể phát hiện trong file gốc
        text = text
          .replace(/with youI /g, 'with you\nI ')
          .replace(/rhythms'Cause /g, "rhythms\n'Cause ");
        // Nếu còn trường hợp dính: lowercase rồi ngay lập tức uppercase (không phải câu rút gọn kiểu I'm / It's ) => chèn xuống dòng
        text = text.replace(/([a-z])([A-Z])(?![a-z])/g, (m, a, b) => `${a}\n${b}`);
        this.song.lyrics = text.trim();
      },
      error: () => {
        this.song.lyrics = 'Lyrics not available.';
      }
    });
  }

  toggleLike() { this.song.liked = !this.song.liked; }
  setRating(star: number) { this.song.rating = star; }
  playSong() {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying ? 'Playing' : 'Paused');
  }
  downloadSong() { console.log('Download song'); }
  shareSong() { console.log('Share song'); }
}
