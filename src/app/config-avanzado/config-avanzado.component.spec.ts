import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAvanzadoComponent } from './config-avanzado.component';

describe('ConfigAvanzadoComponent', () => {
  let component: ConfigAvanzadoComponent;
  let fixture: ComponentFixture<ConfigAvanzadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAvanzadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
