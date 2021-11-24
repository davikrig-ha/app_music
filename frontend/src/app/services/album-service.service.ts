import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGateway } from 'src/api-gateway';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

 static api_gateway: ApiGateway

  constructor(
    public http: HttpClient
  ) { }


   

}
