import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumPorvider } from 'src/providers/album.provider';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = '';
  author = '';

  constructor(
    private router: Router,
    private albumPorvider: AlbumPorvider
   
  ) { }

  ngOnInit(): void {
        // this.getAlbum();
      }
      
  search(){
    const params = `name=${this.name}&author=${this.author}`
    this.searchAlbum(params);
    // this.findAuthorByName(`author=${this.author}`);
  }

   async getAlbum() {
    
    try {
      const album = await this.albumPorvider.getAlbumList();
      console.log(album)
    } catch (error) {
      console.error(error)
    }
  } 

  async searchAlbum(query?: string) {
    
    try {
      const album = await this.albumPorvider.findAlbum(query);
      console.log(album)
    } catch (error) {
      console.error(error)
    }
  } 




}
