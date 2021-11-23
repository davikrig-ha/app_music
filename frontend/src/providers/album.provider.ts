import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiGateway } from "src/api-gateway";

@Injectable({
    providedIn: 'root'
})
export class AlbumPorvider {
    constructor(private apiGateway: ApiGateway){
    }

    ngOnInit(): void {

    }

    getConfig(property: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get('album' + property).subscribe((response: HttpResponse<any>) => {
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
