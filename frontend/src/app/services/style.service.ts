import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Style from './../domain/Style';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class StyleService {
    private headers: Headers;
    private numberC: number = 0;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json, text/plain, */*');
    }

    getStyles(): any {
        return this.http
               .get(`http://localhost:8000/api/styles/`, { headers: this.headers })
               .map(res => res.json());
    }
}
