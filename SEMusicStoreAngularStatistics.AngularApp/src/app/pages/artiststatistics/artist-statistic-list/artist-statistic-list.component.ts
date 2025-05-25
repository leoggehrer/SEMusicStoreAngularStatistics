import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IArtistStatistic } from '@app/models/entities/views/i-artist-statistic';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericViewListComponent } from '@app/components/base/generic-view-list.component';
import { ArtistStatisticService } from '@app/services/http/entities/views/artist-statistic-service';

/* Ersetzen Sie hier 'IViewEntity' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IArtistStatistic {

}
/* Ersetzen Sie in Component 'item-view' durch den gewuenschten Namen (z.B.: genre-statistics) */
@Component({
    selector: 'app-artist-statistic-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './artist-statistic-list.component.html',
    styleUrl: './artist-statistic-list.component.css'
})
export class ArtistStatisticListComponent extends GenericViewListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: ArtistStatisticService,
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
        return 'Artist Statistics';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return super.getItemTitel(item);
    }

    /* 
    *  Hier koennen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => a.artistName.localeCompare(b.artistName));
    }
}

