import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTrackListComponent } from './album-track-list.component';

describe('AlbumTrackListComponent', () => {
  let component: AlbumTrackListComponent;
  let fixture: ComponentFixture<AlbumTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumTrackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
