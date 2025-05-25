import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITrack } from '@app/models/entities/i-track';
import { IAlbum } from '@app/models/entities/i-album';
import { IGenre } from '@app/models/entities/i-genre';
import { AlbumService } from '@app/services/http/entities/album-service';
import { GenreService } from '@app/services/http/entities/genre-service';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends ITrack {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: album) */
@Component({
    selector: 'app-track-edit',
    imports: [CommonModule, FormsModule],
    templateUrl: './track-edit.component.html',
    styleUrl: './track-edit.component.css'
})
// Ersetzen Sie hier Item durch den gewuenschten Namen (z.B.: Item -> Album)
export class TrackEditComponent extends GenericEditComponent<IItem> implements OnInit {

    public albums: IAlbum[] = [];
    public genres: IGenre[] = [];

    constructor(
        public override activeModal: NgbActiveModal,
        private albumService: AlbumService,
        private genreService: GenreService) {
        super(activeModal);
    }

    ngOnInit(): void {
      this.loadArtists();
      this.loadAlbums();  
    }
    
    private loadAlbums() {
      this.albumService.getAll().subscribe({
        next: (albums) => {
          this.albums = albums;
        },
        error: (err) => {
          console.error('Fehler beim Laden der Alben:', err);
        } 
      });
    }
    
    private loadArtists() {
      this.genreService.getAll().subscribe({
        next: (genres) => {
          this.genres = genres;
        },
        error: (err) => {
          console.error('Fehler beim Laden der Künstler:', err);
        }
      });
    }

    /*
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Item Hinzufuegen oder Item Berbeiten
    */
    public override get title(): string {
        return 'Track ' + super.title;
    }
}
