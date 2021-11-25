import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiGateway } from "src/api-gateway";

const apiVersion = 'api/v1'

@Injectable({
    providedIn: 'root'
})
export class AlbumPorvider {
    constructor(private apiGateway: ApiGateway){
    }

    ngOnInit(): void {

    }

    getAlbumList(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get('album').subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    getAlbum(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get( 'album', { id: id }).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    findAlbum(query: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get( `album/find?${query}`).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    findAuthor(query: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get( `album/findAuthor?${query}`).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    validateRegister(albumDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('album', albumDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    editDomain(albumDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.put('album', albumDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    saveDomain(albumDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('album', albumDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    };

    whoIs(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('album', { domain: name }).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }
}
