import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistriesComponent } from './registries/registries.component';
import { RegistryEditComponent } from './registry-edit/registry-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistriesComponent,
    RegistryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
