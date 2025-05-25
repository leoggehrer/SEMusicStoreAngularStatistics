import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistStatisticListComponent } from './artist-statistic-list.component';

describe('ArtistStatisticListComponent', () => {
  let component: ArtistStatisticListComponent;
  let fixture: ComponentFixture<ArtistStatisticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistStatisticListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistStatisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
