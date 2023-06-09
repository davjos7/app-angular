import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelicitarComponent } from './felicitar.component';

describe('FelicitarComponent', () => {
  let component: FelicitarComponent;
  let fixture: ComponentFixture<FelicitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelicitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
