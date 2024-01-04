import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
// import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://www.linkedin.com/in/marcochitu/', name: 'LinkedIn', img: './assets/svg/linkedin.svg'},
    {url: 'https://github.com/MarcoChitu', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}
