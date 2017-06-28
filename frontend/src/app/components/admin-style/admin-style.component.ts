import { Component, OnInit } from '@angular/core';
import { TypeService } from './../../services/type.service'
import { SubtypeService } from './../../services/subtype.service'
import { StyleService } from './../../services/style.service'
import Subtype from './../../domain/Subtype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-style',
  templateUrl: './admin-style.component.html',
  styleUrls: ['./admin-style.component.css'],
  providers: [TypeService, SubtypeService, StyleService]
})
export class AdminStyleComponent implements OnInit {
  imagesList: Array<String> = [];
  styleName: string;
  styleDescription: string;

  constructor(private typeService: TypeService, private subtypeService: SubtypeService, private styleService: StyleService, private router: Router) { }

  openPopup(): void {
      this.typeService.setTypePopup();
  }

  imageUpload(event): void {
      this.readThis(event.target);
  }

  readThis(inputValue: any): void {
      let file:File = inputValue.files[0];
      let myReader:FileReader = new FileReader();
      let image;
      myReader.onloadend = (e) => {
        image = myReader.result;
        this.imagesList.push(image);
        inputValue = null;
      }
      myReader.readAsDataURL(file);
  }

  removeImage(imageIndex): void {
      this.imagesList.splice(imageIndex, 1);
  }

  getSubtypeList(): Array<Subtype> {
      let arr = this.subtypeService.getSelectedSubtype();
      return Object.keys(arr).map((k) => arr[k])
  }

  getSubtypeIDs(): Array<number> {
      let arr = this.subtypeService.getSelectedSubtype();
      return Object.keys(arr).map((k) => +k)
  }

  removeSubtype(id): any {
      this.subtypeService.removeSelectedSubtype(id);
  }

  createStyle(): void {
      this.styleService.createStyle(this.styleName, this.styleDescription, this.getSubtypeIDs(), this.imagesList)
      .subscribe(
          data => { this.router.navigate(['/styles']) },
          error => {},
          () => {}
      )
  }

  ngOnInit() { }

}
