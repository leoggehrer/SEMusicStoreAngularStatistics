import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IArtistAlbum } from '@app/models/entities/views/i-artist-album';
import { ArtistAlbumService } from '@app/services/http/entities/views/artist-album-service';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericViewListComponent } from '@app/components/base/generic-view-list.component';

/* Ersetzen Sie hier 'IViewEntity' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IArtistAlbum {

}
/* Ersetzen Sie in Component 'item-view' durch den gewuenschten Namen (z.B.: genre-statistics) */
@Component({
    selector: 'app-artist-album-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './artist-album-list.component.html',
    styleUrl: './artist-album-list.component.css'
})
export class ArtistAlbumListComponent extends GenericViewListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: ArtistAlbumService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'artistName.ToLower().Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Artist mit Alben';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return super.getItemTitel(item);
    }

    /* 
    *  Hier k�nnen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => (a.artistName + a.albumTitle).localeCompare(b.artistName + b.albumTitle));
    }
}

