import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetiteFaimComponent } from './petite-faim.component';

describe('PetiteFaimComponent', () => {
  let component: PetiteFaimComponent;
  let fixture: ComponentFixture<PetiteFaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetiteFaimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetiteFaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
