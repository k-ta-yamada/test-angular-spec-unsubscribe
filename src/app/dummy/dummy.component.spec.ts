import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComponent } from './dummy.component';

describe('DummyComponent', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => console.group('DummyComponent::Spec'));
  afterAll(() => console.groupEnd());

  xit('should behave...', () => {
    expect(component).not.toBeTruthy();
  });

  [...Array(3)].forEach((v, i) => {
    it(`should create ${i}`, (done) => {
      console.group(`Spec ${i}`);

      component.subject$.subscribe(val => {
        console.group('DummyComponent::Spec::subscribe');
        console.log(`msg: [${val}]`);
        expect(val).toBeDefined();
        done();
        console.groupEnd();
      });

      const msg = `DummyComponent::Spec ${i}`;
      console.log(`sned msg: [${msg}]`);
      component.subject$.next(msg);
      console.groupEnd();
    });
  });

});
