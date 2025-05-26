import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreTrackListComponent } from './genre-track-list.component';

describe('GenreTrackListComponent', () => {
  let component: GenreTrackListComponent;
  let fixture: ComponentFixture<GenreTrackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreTrackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
