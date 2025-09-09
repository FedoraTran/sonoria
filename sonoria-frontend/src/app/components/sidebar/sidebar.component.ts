import {Component, OnInit} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule, NgClass, RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  activeLink = '';
  constructor(private router: Router) {
  }

  menuItems = [
    { icon: 'home', title: 'Home', route: 'home' },
    { icon: 'category', title: 'Category', route: 'category' },
    { icon: 'cloud_upload', title: 'Upload', route: 'upload' },
    { icon: 'playlist_play', title: 'Playlist', route: 'playlist' },
    { icon: 'account_circle', title: 'Profile', route: 'profile' },
    { icon: 'search', title: 'Search', route: 'search' } // Thêm mục Search
  ];

  ngOnInit() {
    this.setActiveLink();
  }

  onMenuClick(route: string) {
    this.router.navigate([route]);
  }

  setActiveLink(): void {
    if (this.router.url.includes('/home')) {
      this.activeLink = this.menuItems[0].route;
    } else if (this.router.url.includes('/category')) {
      this.activeLink = this.menuItems[1].route;
    } else if (this.router.url.includes('/upload')) {
      this.activeLink = this.menuItems[2].route;
    } else if (this.router.url.includes('/playlist')) {
      this.activeLink = this.menuItems[3].route;
    } else if (this.router.url.includes('/profile')) {
      this.activeLink = this.menuItems[4].route;
    }  else {
      this.activeLink = '';
    }
  }
}
