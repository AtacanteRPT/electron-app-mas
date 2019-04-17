import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorPuertosComponent } from './visualizador-puertos.component';

describe('VisualizadorPuertosComponent', () => {
  let component: VisualizadorPuertosComponent;
  let fixture: ComponentFixture<VisualizadorPuertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizadorPuertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorPuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
