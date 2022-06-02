import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  subject$ = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    this.subject$.subscribe((val) => {
      console.group('DummyComponent.ngOnInit.subscribe');
      console.log(`msg: [${val}]`);
      console.groupEnd();
    });
  }
}
