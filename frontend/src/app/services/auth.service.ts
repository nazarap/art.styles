import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { IMAGES_URL } from '../app.config';

@Injectable()
export class AuthService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json, text/plain, */*');
    }

    login(login: string, password: string): any {
        return this.http
           .post(`${IMAGES_URL}api/user/login/`, {login: login, password: password}, { headers: this.headers })
           .map(res => res.json());
    }
}
