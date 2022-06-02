import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyComponent } from './dummy/dummy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('dummy')
  child: DummyComponent | undefined;

  title = new Date(Date.now()).toISOString();

  ngOnInit(): void {
    this.child?.subject$.subscribe((val) => {
      console.group('AppComponent.ngOnInit.subscribe');
      console.log(`msg: [${val}]`);
      console.groupEnd();
    });
  }
}
