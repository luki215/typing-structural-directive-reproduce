import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';


interface Foo {
  text: string;
  count: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public obs$: Observable<Foo> = of({text: 'Bar', count: 10});
}
