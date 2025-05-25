import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditComponent } from './artist-edit.component';

describe('ArtistEditComponent', () => {
  let component: ArtistEditComponent;
  let fixture: ComponentFixture<ArtistEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
