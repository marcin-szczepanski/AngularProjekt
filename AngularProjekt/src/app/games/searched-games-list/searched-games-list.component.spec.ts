import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedGamesListComponent } from './searched-games-list.component';

describe('SearchedGamesListComponent', () => {
  let component: SearchedGamesListComponent;
  let fixture: ComponentFixture<SearchedGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedGamesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
