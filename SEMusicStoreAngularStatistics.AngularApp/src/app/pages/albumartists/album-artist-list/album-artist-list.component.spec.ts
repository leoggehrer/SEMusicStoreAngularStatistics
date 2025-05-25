import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumArtistListComponent } from './album-artist-list.component';

describe('AlbumArtistListComponent', () => {
  let component: AlbumArtistListComponent;
  let fixture: ComponentFixture<AlbumArtistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumArtistListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
