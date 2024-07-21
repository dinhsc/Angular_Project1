import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritesSaucesComponent } from './frites-sauces.component';

describe('FritesSaucesComponent', () => {
  let component: FritesSaucesComponent;
  let fixture: ComponentFixture<FritesSaucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FritesSaucesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FritesSaucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
