import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAlbum } from '@app/models/entities/i-album';
import { IArtist } from '@app/models/entities/i-artist';
import { ArtistService } from '@app/services/http/entities/artist-service';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';

@Component({
  selector: 'app-album-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './album-edit.component.html',
  styleUrl: './album-edit.component.css'
})
export class AlbumEditComponent extends GenericEditComponent<IAlbum> implements OnInit {

  public artists: IArtist[] = [];
  constructor(
    public override activeModal: NgbActiveModal,
    private artistService: ArtistService) {
    super(activeModal);
  }

  public get getArtistList(): IArtist[] {
    return this.artists;
  }

  ngOnInit(): void {
    this.artistService
      .getAll()
      .subscribe((artists: IArtist[]) => {
        this.artists = artists.sort((a, b) => a.name.localeCompare(b.name));

        if ((this.dataItem.artistId === null ||
          this.dataItem.artistId === undefined) &&
          this.artists.length > 0) {
          this.dataItem.artistId = this.artists[0].id;
        }
      });
  }

  public override get title(): string {
    return 'Album ' + super.title;
  }
}
