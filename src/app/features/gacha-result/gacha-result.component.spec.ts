import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaResultComponent } from './gacha-result.component';

describe('GachaResultComponent', () => {
  let component: GachaResultComponent;
  let fixture: ComponentFixture<GachaResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GachaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
