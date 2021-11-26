import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicPorvider } from 'src/providers/music.provider';
import { ApiGateway } from 'src/api-gateway';



@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ApiGateway, MusicPorvider],
  bootstrap: [MusicComponent]
})
export class MusicModule { }
