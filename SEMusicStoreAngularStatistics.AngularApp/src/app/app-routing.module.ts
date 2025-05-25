import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { GenreListComponent } from './pages/genres/genre-list/genre-list.component';
import { ArtistListComponent } from './pages/artists/artist-list/artist-list.component';
import { AlbumListComponent } from './pages/albums/album-list/album-list.component';
import { TrackListComponent } from './pages/tracks/track-list/track-list.component';
import { AlbumArtistListComponent } from './pages/albumartists/album-artist-list/album-artist-list.component';
import { ArtistAlbumListComponent } from './pages/artistalbums/artist-album-list/artist-album-list.component';
import { ArtistTrackListComponent } from './pages/artisttracks/artist-track-list/artist-track-list.component';
import { ArtistStatisticListComponent } from './pages/artiststatistics/artist-statistic-list/artist-statistic-list.component';

const routes: Routes = [
  // Öffentlicher Login-Bereich
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth/login', component: LoginComponent },

  // Geschützter Bereich mit Dashboard und Unterseiten
  { path: 'genres', component: GenreListComponent, canActivate: [AuthGuard] },
  { path: 'artists', component: ArtistListComponent, canActivate: [AuthGuard] },
  { path: 'albums', component: AlbumListComponent, canActivate: [AuthGuard] },
  { path: 'tracks', component: TrackListComponent, canActivate: [AuthGuard] },
  { path: 'albumartists', component: AlbumArtistListComponent, canActivate: [AuthGuard] },
  { path: 'artisttracks', component: ArtistTrackListComponent, canActivate: [AuthGuard] },
  { path: 'artiststatistics', component: ArtistStatisticListComponent, canActivate: [AuthGuard] },

  // Statistiken:
  { path: 'artistalbums', component: ArtistAlbumListComponent, canActivate: [AuthGuard] },

  // Redirect von leerem Pfad auf Dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Fallback bei ungültiger URL
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
