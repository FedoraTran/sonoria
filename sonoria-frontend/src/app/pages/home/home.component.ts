import {MatIconModule} from '@angular/material/icon';
import {MaterialModule} from '../../shared/modules/material.module';
import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollExplore(dir: number) {
  const el = document.querySelector('.explore-list');
  if (el) {
    if (dir > 0) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}

  scrollTrending(dir: number) {
  const el = document.querySelector('.trending-list');
  if (el) {
    if (dir > 0) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }

}
}
