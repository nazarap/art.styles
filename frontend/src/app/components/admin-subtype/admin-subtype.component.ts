import { Component, OnInit } from '@angular/core';
import { TypeService } from './../../services/type.service'
import { SubtypeService } from './../../services/subtype.service'
import Subtype from './../../domain/Subtype';
import Type from './../../domain/Type';

@Component({
  selector: 'admin-subtype',
  templateUrl: './admin-subtype.component.html',
  styleUrls: ['./admin-subtype.component.css'],
  providers: [TypeService, SubtypeService]
})
export class AdminSubtypeComponent implements OnInit {
  imagesList: Array<String> = [];
  subtypeName: string;
  subtypeDescription: string;
  typeID: number;
  typeList: Array<Type>;

  constructor(private typeService: TypeService, private subtypeService: SubtypeService) {}

  ngOnInit(): void {
      this.typeService.getTypes().subscribe(
          data => {this.typeList = data.types as Type[]},
          error => {alert(error)},
          () => {}
      )
  }

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

  createSubtype(): void {
      this.subtypeService.createSubtype(this.subtypeName, this.subtypeDescription, this.typeID, this.imagesList);
  }

}
