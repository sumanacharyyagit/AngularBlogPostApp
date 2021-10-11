import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public thisYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop(){
    window.scrollTo(0, 0);
  }

}
