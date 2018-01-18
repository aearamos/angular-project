// import a component before using it from core to have access to core functionalities
import { Component } from '@angular/core';

// add a decorator to show angular it's not just a class, but a component
// decorators enhance your class and elements

@Component({
  //pass a javascript object to the decorator
  // this unique name allows to use this component in other components in a html file
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})

export class WarningAlertComponent {

}

