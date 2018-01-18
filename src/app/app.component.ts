import { Component } from '@angular/core';

@Component({
  //has to be an unique selector to avoid overriding other component
  //
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  //title = 'Is this the real life?';
}


//you can also use an inline style for the component or an external file

// directives -> are instructions in the DOM
// components are directives with a template
