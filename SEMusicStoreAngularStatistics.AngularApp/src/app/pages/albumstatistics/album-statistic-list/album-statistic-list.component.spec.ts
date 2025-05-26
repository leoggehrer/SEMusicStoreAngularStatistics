import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumStatisticListComponent } from './album-statistic-list.component';

describe('AlbumStatisticListComponent', () => {
  let component: AlbumStatisticListComponent;
  let fixture: ComponentFixture<AlbumStatisticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumStatisticListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumStatisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
