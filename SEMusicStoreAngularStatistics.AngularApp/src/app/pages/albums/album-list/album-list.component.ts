import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { IAlbum } from '@app/models/entities/i-album';
import { AlbumService } from '@app/services/http/entities/album-service';
import { AlbumEditComponent } from '@app/components/album-edit/album-edit.component';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IAlbum {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: album) */
@Component({
    selector: 'app-album-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './album-list.component.html',
    styleUrl: './album-list.component.css'
})
export class AlbumListComponent extends GenericEntityListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: AlbumService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'artist.name.ToLower().Contains(@0) OR title.ToLower().Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Albums';
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
        return items.sort((a, b) => a.artist.name.localeCompare(b.artist.name));
    }

    /*
    *  Geben Sie hier die Komponente fuer das Bearbeiten eines Eintrages an.
    *  (z.B.: AlbumEditComponent)
    *  Default: keine Komponente
    */
    protected override getEditComponent() {
        return AlbumEditComponent;
    }
}

