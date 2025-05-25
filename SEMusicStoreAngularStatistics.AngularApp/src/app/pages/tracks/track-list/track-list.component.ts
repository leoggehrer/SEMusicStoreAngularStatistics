import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { ITrack } from '@app/models/entities/i-track';
import { TrackService } from '@app/services/http/entities/track-service';
import { TrackEditComponent } from '@app/components/track-edit/track-edit/track-edit.component';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends ITrack {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: album) */
@Component({
    selector: 'app-track-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './track-list.component.html',
    styleUrl: './track-list.component.css'
})
export class TrackListComponent extends GenericEntityListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: TrackService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'album.title.ToLower().Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Tracks';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return item.title;
    }

    /* 
    *  Hier k�nnen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => (a.album.title + a.title).localeCompare(b.album.title + b.title));
    }

    /*
    *  Geben Sie hier die Komponente fuer das Bearbeiten eines Eintrages an.
    *  (z.B.: AlbumEditComponent)
    *  Default: keine Komponente
    */
    protected override getEditComponent() {
        return TrackEditComponent;
    }
}

