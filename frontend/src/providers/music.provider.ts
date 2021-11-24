import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiGateway } from "src/api-gateway";


const apiVersion = 'api/v1'

@Injectable({
    providedIn: 'root'
})
export class MusicPorvider {
    constructor(private apiGateway: ApiGateway){
    }

    ngOnInit(): void {

    }

    getConfig(property: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get('music' + property).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    getAlbum(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.get( 'music', { id: id }).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    validateRegister(musicDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('music', musicDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    editDomain(musicDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.put('msuic', musicDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }

    saveDomain(musicDetail: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('msuic', musicDetail).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    };

    whoIs(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.apiGateway.post('msuic', { domain: name }).subscribe((response: HttpResponse<any>) => {
                resolve(response.body);
                // this.snackBar.successMessage(response.body.message);
            }, reject);
        });
    }
}
