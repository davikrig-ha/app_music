import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumPorvider } from 'src/providers/album.provider';

export interface Album {
id: number;
author: string;
name: string;
lancamento: string;
music: Music[];
}

export interface Music {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  name = '';
  author = '';
  albuns!: Album[];

  constructor(private router: Router, private albumPorvider: AlbumPorvider) {}

  ngOnInit(): void {}

  search() {
    const params = `name=${this.name}&author=${this.author}`;
    this.searchAlbum(params);
  }

  async getAlbum() {
    try {
      this.albuns = await this.albumPorvider.getAlbumList();
      console.log(this.albuns);
    } catch (error) {
      console.error(error);
    }
  }

  async searchAlbum(query?: string) {
    try {
      this.albuns = await this.albumPorvider.findAlbum(query);
      console.log(this.albuns);
    } catch (error) {
      console.error(error);
    }
  }
}
