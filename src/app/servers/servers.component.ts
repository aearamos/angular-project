import { Component, OnInit } from '@angular/core';

@Component({
  // use [] to turn the selectior into an attribute
  //selector: '[app-servers]',

  // select by class
  //selector: '.app-servers',
  // you can choose the selector (attribute or class)
  // and use it in a css or html file.

  //most common use for selector
  selector: 'app-servers',

  //defining the html code in the typescript code with inline template
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  
  // Task 2 username
  //username = "";

  // directives
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName ;
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

//each component needs to have a template
// if you have a lot of code, then use a templateUrl (external template)
