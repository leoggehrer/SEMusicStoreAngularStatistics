import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageBoxService } from '@app/services/message-box-service.service';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IGenre } from '@app/models/entities/i-genre';
import { GenreService } from '@app/services/http/entities/genre-service';
import { GenreEditComponent } from '@app/components/genre-edit/genre-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IGenre') */
interface IItem extends IGenre {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: genre) */
@Component({
    selector: 'app-genre-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './genre-list.component.html',
    styleUrl: './genre-list.component.css'
})
export class GenreListComponent extends GenericEntityListComponent<IItem> implements OnInit {

    constructor(
        protected override modal: NgbModal,
        protected dataAccessService: GenreService,
        protected override messageBoxService: MessageBoxService) {
        super(modal, dataAccessService, messageBoxService);
    }

    ngOnInit(): void {
        // Passen Sie hier den Filter entsprechend an
        this._queryParams.filter = 'name.ToLower().Contains(@0)';
        this.reloadData();
    }

    /* 
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Items
    */
    public override get pageTitle(): string {
        return 'Genres';
    }

    /* 
    *  Passen Sie hier den Titel fuer die Loeschbestaetigung an.
    *  Default: id
    */
    public override getItemTitel(item: IItem): string {
        return item.name;
    }

    /* 
    *  Hier k�nnen Sie die Sortierung der Anzeige anpassen
    *  z.B.: return items.sort((a, b) => a.name.localeCompare(b.name));
    *  Default: keine Sortierung
    */
    protected override sortData(items: IItem[]): IItem[] {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    /*
    *  Geben Sie hier die Komponente fuer das Bearbeiten eines Eintrages an.
    *  (z.B.: GenreEditComponent)
    *  Default: keine Komponente
    */
    protected override getEditComponent() {
        return GenreEditComponent;
    }
}

