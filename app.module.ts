import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxQRCodeModule,
    NgxImageZoomModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

