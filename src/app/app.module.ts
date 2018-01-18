// a module is a bundle of functionalities of the app
// which giver the informations of the features of the app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// manually add the new component here so Typescript knows where to look
import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //without .ts
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; //without .ts


@NgModule({
  // register new components in the declarations array
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// angular uses components to build web pages and modules
// to store different pieces into packages


// databiding - communication of your components/business logic 
// and the templates the user sees