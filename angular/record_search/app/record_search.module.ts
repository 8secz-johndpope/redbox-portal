import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RecordSearchComponent }  from './';
import { RecordSearchRefinerComponent } from './';
import { SharedModule } from './shared/shared.module';
import * as $ from 'jquery';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule, SharedModule],
  declarations: [ RecordSearchRefinerComponent, RecordSearchComponent  ],
  providers:    [ RecordSearchRefinerComponent ],
  bootstrap:    [ RecordSearchComponent]
})
export class RecordSearchModule { }
