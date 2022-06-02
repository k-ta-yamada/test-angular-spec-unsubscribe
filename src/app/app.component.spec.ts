import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DummyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => console.group('AppComponent::Spec'));
  afterAll(() => console.groupEnd());

  [...Array(3)].map((v, i) => {
    it(`should create the app ${i}`, (done) => {
      console.group(`Spec ${i}`);

      component.child!.subject$.subscribe(val => {
        console.group('AppComponent::Spec::subscribe');
        console.log(`msg: [${val}]`);
        expect(val).toBeDefined();
        done();
        console.groupEnd();
      });

      component.ngOnInit();

      const msg = `AppComponent::Spec ${i}`;
      console.log(`sned msg: [${msg}]`);
      component.child?.subject$.next(msg);
      console.groupEnd();
    });
  });
});
