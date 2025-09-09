import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {PlayerBarComponent} from './components/player-bar/player-bar.component';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import {AuthState} from './ngrx/auth/auth.state';
import * as AuthActions from './ngrx/auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, PlayerBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sonoria';

  subscriptions: Subscription[] = [];
  idToken$ !: Observable<string>
  idToken: string = '';

  constructor(
    private router: Router,
    private auth: Auth,
    private store: Store<{
      auth: AuthState,
    }>) {
    this.idToken$ = this.store.select('auth', 'idToken')

    this.auth.onAuthStateChanged(async (auth: any) => {
      if (auth) {

        let idToken = await auth.getIdToken()
        const user = {
          uid: auth.uid,
          name: auth.name,
          email: auth.email,
          photoURL: auth.photoURL
        }
        this.store.dispatch(AuthActions.storeAuth({currentUser: user, idToken: idToken}))
      } else {
        console.log('No user is signed in.');
      }
    })
  }

  ngOnInit() {
    this.subscriptions.push(
      this.idToken$.subscribe((idToken: string) => {
        if (idToken) {
          console.log('ID Token:', idToken);
          this.idToken = idToken;
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
