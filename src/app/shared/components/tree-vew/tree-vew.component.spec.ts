import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeVewComponent } from './tree-vew.component';

describe('TreeVewComponent', () => {
  let component: TreeVewComponent;
  let fixture: ComponentFixture<TreeVewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeVewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeVewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
