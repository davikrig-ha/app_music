import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ApiGateway } from 'src/api-gateway';
import { AlbumPorvider } from 'src/providers/album.provider';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ApiGateway, AlbumPorvider],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
