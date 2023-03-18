import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteTestComponent } from './white-test.component';

describe('WhiteTestComponent', () => {
  let component: WhiteTestComponent;
  let fixture: ComponentFixture<WhiteTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
