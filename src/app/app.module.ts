import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListItemComponent } from './my-list-item/my-list-item.component';
import { MyListComponent } from './my-list/my-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { StarshipSelectorComponent } from './starship-selector/starship-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListItemComponent,
    MyListComponent,
    StarshipSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
