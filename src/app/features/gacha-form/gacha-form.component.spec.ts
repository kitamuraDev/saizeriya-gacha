import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaFormComponent } from './gacha-form.component';

describe('GachaFormComponent', () => {
  let component: GachaFormComponent;
  let fixture: ComponentFixture<GachaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GachaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GachaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
