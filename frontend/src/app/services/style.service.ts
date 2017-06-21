import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Style from './../domain/Style';
import Subtype from './../domain/Subtype';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class StyleService {
    private headers: Headers;
    private numberC: number = 0;
    private searchStyleList: Array<Style> = null;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json, text/plain, */*');
    }

    getStyles(): any {
        return this.http
               .get(`http://localhost:8000/api/styles/`, { headers: this.headers })
               .map(res => res.json());
    }

    getStyleById(styleId): any {
        return this.http
               .get(`http://localhost:8000/api/style/${styleId}/` , { headers: this.headers })
               .map(res => res.json());
    }

    searchStyles(searchKey): any {
        return this.http
               .post(`http://localhost:8000/api/styles/search/`, {search_key: searchKey}, { headers: this.headers })
               .map(res => res.json());
    }

    search(subtypesList): any {
        this.http
           .post(`http://localhost:8000/api/styles/filter/`, {subtypes_list: subtypesList}, { headers: this.headers })
           .map(res => res.json())
           .subscribe(
               data => {this.searchStyleList = data.styles as Style[]},
               error => {},
               () => {}
           )
    }

    getSearchStyleList(): Array<Style> {
        return this.searchStyleList;
    }

    createStyle(name: string, description: string, subtypesList: Array<number>, imagesList: Array<String>): any {
        return this.http
           .post(`http://localhost:8000/api/style/create/`, {name: name, description: description, subtypes_list: subtypesList, images_list: imagesList}, { headers: this.headers })
           .map(res => res.json());
    }
}
