// import a component before using it from core to have access to core functionalities
import { Component } from '@angular/core';

// add a decorator to show angular it's not just a class, but a component
// decorators enhance your class and elements

@Component({
  //pass a javascript object to the decorator
  // this unique name allows to use this component in other components in a html file
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
	.online{
		color: white;
	}
  `]
})

export class ServerComponent {
	serverid: number = 10;
	serverStatus: string = 'offline';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor(){
		return this.serverStatus === 'online' ? 'green' : 'red';
	}
}


// string interpolation --> must have {{}} with any command 
// that generates a string (even ternary)