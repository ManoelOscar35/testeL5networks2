import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPersonagensComponent } from './detalhes-personagens.component';

describe('DetalhesPersonagensComponent', () => {
  let component: DetalhesPersonagensComponent;
  let fixture: ComponentFixture<DetalhesPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPersonagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
