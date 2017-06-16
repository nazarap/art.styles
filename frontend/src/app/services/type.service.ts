import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import Type from './../domain/Type';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class TypeService {
    private headers: Headers;
    private isOpenPopup = false;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json, text/plain, */*');
    }

    getTypes(): any {
        return this.http
               .get(`http://localhost:8000/api/types/`, { headers: this.headers })
               .map(res => res.json());
    }

    getTypePopup(): boolean {
        return this.isOpenPopup;
    }

    setTypePopup(): void {
        this.isOpenPopup = !this.isOpenPopup;
    }

    createType(name: string, description: string): void {
        this.http
           .post(`http://localhost:8000/api/type/create/`, {name: name, description: description}, { headers: this.headers })
           .map(res => res.json())
           .subscribe(
               data => {},
               error => {},
               () => {}
           )
    }
}
