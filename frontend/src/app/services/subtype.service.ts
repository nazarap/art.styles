import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import Subtype from './../domain/Subtype';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class SubtypeService {
    private headers: Headers;
    private isOpenPopup = false;
    selectedSubtypeList: { [key: string]: Subtype } = {};

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json, text/plain, */*');
    }

    getSubtypes(typeID): any {
        return this.http
               .get(`http://localhost:8000/api/subtypes/${typeID}/`, { headers: this.headers })
               .map(res => res.json());
    }

    addSelectedSubtype(subtype): any {
        this.selectedSubtypeList[subtype.id] = subtype;
    }

    removeSelectedSubtype(subtypeID): any {
        delete this.selectedSubtypeList[subtypeID];
    }

    getSelectedSubtype(): { [key: string]: Subtype } {
        return this.selectedSubtypeList;
    }

    createSubtype(name: string, description: string, typeID: number, imagesList: Array<String>): any {
        this.http
           .post(`http://localhost:8000/api/subtype/create/`, {name: name, description: description, type_id: typeID, images_list: imagesList}, { headers: this.headers })
           .map(res => res.json())
           .subscribe(
               data => {},
               error => {},
               () => {}
           )
    }
}
