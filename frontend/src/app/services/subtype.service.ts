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
}
