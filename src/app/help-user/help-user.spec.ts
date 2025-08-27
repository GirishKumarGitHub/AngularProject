import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpUser } from './help-user';

describe('HelpUser', () => {
  let component: HelpUser;
  let fixture: ComponentFixture<HelpUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
