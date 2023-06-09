import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespedirseComponent } from './despedirse.component';

describe('DespedirseComponent', () => {
  let component: DespedirseComponent;
  let fixture: ComponentFixture<DespedirseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespedirseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespedirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
