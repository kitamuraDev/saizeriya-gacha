import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaButtonComponent } from './gacha-button.component';

describe('GachaButtonComponent', () => {
  let component: GachaButtonComponent;
  let fixture: ComponentFixture<GachaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GachaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
