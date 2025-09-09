import {Component, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import { Router } from '@angular/router';
import {FormControl, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {debounceTime, distinctUntilChanged, Observable, Subscription} from 'rxjs';
import {ProfileModel} from '../../models/profile.model';
import {MatDialog} from '@angular/material/dialog';
import {AuthState} from '../../ngrx/auth/auth.state';
import {Store} from '@ngrx/store';
import {logout} from '../../ngrx/auth/auth.actions';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [FormsModule, MaterialModule, CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() clearSearch = new EventEmitter<void>();

  searchText: string = '';
  searchControl = new FormControl('');
  profile$!: Observable<ProfileModel>;
  profile!: ProfileModel;
  subscriptions: Subscription[] = [];
  query = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<{
      auth: AuthState
    }>
  ) {
    // this.searchControl.valueChanges
    //   .pipe(debounceTime(300), distinctUntilChanged())
    //   .subscribe((query) => {
    //     if (query) {
    //       this.store.dispatch(SearchActions.searchCategories({query}));
    //       this.store.dispatch(SearchActions.searchTracks({query}));
    //       this.store.dispatch(SearchActions.searchPlaylists({query}));
    //       this.store.dispatch(SearchActions.searchProfiles({query}));
    //     }
    //   });
  }

  ngOnInit() {
    this.profile$ = this.store.select('auth', 'currentUser');

    this.subscriptions.push(
      this.profile$.subscribe(profile => {
        console.log('Current user:', profile);

        if (profile.uid) {
          this.profile = profile;
          console.log('Current user:', profile);
        }
      })
    )
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.store.dispatch(logout());
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '700px',
      panelClass: 'custom-dialog-container'
    })
  }

  onImgError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/default-avatar.png';
  }


  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onSearch() {
    if (this.query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.query.trim() } });
    }
  }

}
