import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {

      title.setTitle("ARTstyle - Admin side");

      meta.addTags([
          {
            name: 'robots', content: 'index/noindex, follow/nofollow'
          },
          {
            name: 'description', content: 'Сторінка для адміністраторів сайту'
          }
      ])
  }

  ngOnInit() {
  }

}
