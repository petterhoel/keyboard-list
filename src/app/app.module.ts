import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyListItemComponent } from './my-list-item/my-list-item.component';
import { MyListComponent } from './my-list/my-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StarshipSelectorComponent } from './starship-selector/starship-selector.component';
import { FocusListComponent } from './focus-list/focus-list.component';
import { FocusListItemComponent } from './focus-list-item/focus-list-item.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    MyListItemComponent,
    MyListComponent,
    StarshipSelectorComponent,
    FocusListComponent,
    FocusListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
