import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiGateway } from 'src/api-gateway';
import { AlbumPorvider } from 'src/providers/album.provider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [ApiGateway, AlbumPorvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
