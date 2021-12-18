import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
// import { SectorsComponent } from './sectors/sectors.component';
// import { LocationsComponent } from './locations/locations.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { DurationComponent } from './duration/duration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    // SectorsComponent,
    // LocationsComponent,
    DurationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
