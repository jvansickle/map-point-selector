import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { PathBuilderComponent } from './path-builder/path-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    WelcomeComponent,
    LocationPickerComponent,
    PathBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
