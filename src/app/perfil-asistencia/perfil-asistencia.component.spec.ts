import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAsistenciaComponent } from './perfil-asistencia.component';

describe('PerfilAsistenciaComponent', () => {
  let component: PerfilAsistenciaComponent;
  let fixture: ComponentFixture<PerfilAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
