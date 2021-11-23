import { Component } from '@angular/core';
import { AlbumPorvider } from 'src/providers/album.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private albumPorvider: AlbumPorvider
  ) {

  }

  async request() {
    
    try {
      const album = await this.albumPorvider.getAlbumList();
      console.log(album)
    } catch (error) {
      console.error(error)
    }


    this.albumPorvider.getAlbumList().then(res => {
      console.log(res)
    }, err => {
      console.log(err);
    })
  }
}
