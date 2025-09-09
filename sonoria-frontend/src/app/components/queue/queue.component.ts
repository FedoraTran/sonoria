import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-queue',
  imports: [CommonModule],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.scss'
})
export class QueueComponent {
  playing = {
    image: "https://i.ytimg.com/vi/zz2lDd2kXeQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWShIMA8=&rs=AOn4CLCsZMgzcGnZ3A2A8-Vcwvw-WwWzbA",
    title: "Lé place has me",
    artist: "Dé Sontune Montepré"
  };
  queue = [
    {
      image: "https://i.ytimg.com/vi/zz2lDd2kXeQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgWShIMA8=&rs=AOn4CLCsZMgzcGnZ3A2A8-Vcwvw-WwWzbA",
      title: "La facé so poor",
      artist: "Dé Sontune Montepré"
    },
    {
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      title: "Us du présent",
      artist: "Jàquét 97"
    },
    {
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      title: "Stórm ànd Ouind",
      artist: "Jàquét 97"
    },
    {
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      title: "Pínk béauty",
      artist: "Jàquét 97"
    },
    {
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      title: "Sílver lífe",
      artist: "Jàquét 97"
    },
    {
      image: "https://i.ytimg.com/vi/z7-DwFSHE5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCqT7qHR-fRvhUBMrzgJL37ZP8pwQ",
      title: "Firêflye",
      artist: "Jàquét 97"
    },
    {
      image: "https://i.ytimg.com/vi/CPJYGL0XkC4/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHsCYAC0AWKAgwIABABGE0gZShjMA8=&rs=AOn4CLD_6zmQuKWELfVajM7MqgpNWczm4g",
      title: "Muốn anh đau",
      artist: "Winno"
    }
  ];

  playFromQueue(index: number) {
    const next = this.queue[index];
    this.queue.splice(index, 1);
    this.playing = next;
  }
}
