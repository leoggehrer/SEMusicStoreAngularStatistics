import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreStatisticListComponent } from './genre-statistic-list.component';

describe('GenreStatisticListComponent', () => {
  let component: GenreStatisticListComponent;
  let fixture: ComponentFixture<GenreStatisticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreStatisticListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreStatisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
