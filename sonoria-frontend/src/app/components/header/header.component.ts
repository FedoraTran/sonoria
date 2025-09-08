import { Component, Output, EventEmitter } from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [FormsModule, MaterialModule, CommonModule]
})
export class HeaderComponent {
  query = '';

  @Output() clearSearch = new EventEmitter<void>();

  constructor(private router: Router) {}

  onSearch() {
    if (this.query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.query.trim() } });
    }
  }
  
}
