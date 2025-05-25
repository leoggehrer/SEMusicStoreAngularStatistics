import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IGenre } from '@app/models/entities/i-genre';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';

/* Ersetzen Sie hier 'IKey' durch den gewuenschten 'Type' (z.B.: 'IAlbum') */
interface IItem extends IGenre {

}
/* Ersetzen Sie in Component 'item' durch den gewuenschten Namen (z.B.: album) */
@Component({
    selector: 'app-genre-edit',
    imports: [CommonModule, FormsModule],
    templateUrl: './genre-edit.component.html',
    styleUrl: './genre-edit.component.css'
})
// Ersetzen Sie hier Item durch den gewuenschten Namen (z.B.: Item -> Album)
export class GenreEditComponent extends GenericEditComponent<IItem> {

    constructor(
        public override activeModal: NgbActiveModal) {
        super(activeModal);
    }

    /*
    *  Passen Sie hier den Titel fuer die Ueberschtsseite an.
    *  Default: Item Hinzuf�gen oder Item Berbeiten
    */
    public override get title(): string {
        return 'Genre ' + super.title;
    }
}
