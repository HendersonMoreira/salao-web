import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoformPage } from './produtoform.page';

describe('ProdutoformPage', () => {
  let component: ProdutoformPage;
  let fixture: ComponentFixture<ProdutoformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
