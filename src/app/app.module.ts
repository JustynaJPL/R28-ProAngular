import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModelModule} from "./model/model.module";
import {CoreModule} from "./core/core.module";
import {TableComponent} from "./core/table.component";
import {FormComponent} from "./core/form.component";
import {MessageComponent} from "./messages/message.component";
import {MessageModule} from "./messages/message.module";
import {MessageService} from "./messages/message.service";
import { HttpClientModule } from  '@angular/common/http';
import {RestDataSource, REST_URL} from './model/rest.datasource';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {TermsGuard} from './terms.guard';
import {LoadGuard} from './load.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule, ModelModule, CoreModule,MessageModule, HttpClientModule,
    routing,BrowserAnimationsModule
  ],
  declarations:[AppComponent],
  providers:[MessageService, RestDataSource, TermsGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
