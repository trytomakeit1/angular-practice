import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class services {
    title: string = `Welcome to your dashboard,
    It's where magic happens`;
    url: string;

    constructor(private http: Http){
        this.url = "https://jsonplaceholder.typicode.com/posts/1";
    }

    getInfo (){

        let promise = new Promise((resolve, reject) => {
            let httpcall = this.http.get(this.url);
            httpcall.toPromise().then(
                (rdata) => {
                    resolve(rdata);
                }
            );
            
        });
       return promise;
    }
}