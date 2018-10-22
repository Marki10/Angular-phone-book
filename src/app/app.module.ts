import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressService } from './address.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
