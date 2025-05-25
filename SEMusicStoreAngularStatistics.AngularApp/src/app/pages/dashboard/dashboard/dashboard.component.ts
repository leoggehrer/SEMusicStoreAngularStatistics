import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@app-services/auth.service';

export class DashboardCard {
  title: string;
  text: string;
  type: string;
  bg: string;
  constructor(title: string, text: string, type: string, bg: string) {
    this.title = title;
    this.text = text;
    this.type = type;
    this.bg = bg;
  }
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public publicCards: DashboardCard[] = [
    { title: 'Genre', text: 'Alle Genres im Musikladen', type: '/genres', bg: 'bg-primary text-white' },
    { title: 'Künstler', text: 'Eine Übersicht von bekannten Künstlern', type: '/artists', bg: 'bg-success text-white' },
    { title: 'Albums', text: 'Eine Vielzahl von populäre Alben (Version 1)', type: '/albums', bg: 'bg-success text-white' },
    { title: 'Tracks', text: 'Viele bekannte Songs', type: '/tracks', bg: 'bg-success text-white' },
    { title: 'Album mit Artist', text: 'Eine Vielzahl von populäre Alben (Version 2)', type: '/albumartists', bg: 'bg-success text-white' },
  ];

  public statisticCards: DashboardCard[] = [
    { title: 'Artist mit Alben', text: 'Statistik: Artist und deren Alben', type: '/artistalbums', bg: 'bg-info text-white' },
    { title: 'Artist mit Songs', text: 'Statistik: Artist und deren Songs', type: '/artisttracks', bg: 'bg-info text-white' },
    { title: 'Artist mit Statistik', text: 'Statistik: Artist', type: '/artiststatistics', bg: 'bg-info text-white' },
  ];

  public authCards: DashboardCard[] = [
  ];

  constructor(
    private authService: AuthService, 
    private router: Router) {

  }

  public get isLoginReqired(): boolean {
    return this.authService.isLoginRequired;
  }

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  public logout() {
    this.authService.logout();
  }
}
