import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-post-app';

  constructor(private _router: Router) { 
    this._router.events.subscribe(pgEvent => {
      if(pgEvent instanceof NavigationStart){
        window.scrollTo(0, 0);
      }
    })
  }
}

