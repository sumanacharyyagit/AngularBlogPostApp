import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageData as pd } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageData: any = {};

  constructor( private _router: Router, private _title: Title) { 

    this._title.setTitle('Home || Blog Post App');

    this.pageData = pd;

  }

  ngOnInit(): void {
  }


  goToPostsFromHome() {
    this._router.navigateByUrl('/posts')
  }
}
