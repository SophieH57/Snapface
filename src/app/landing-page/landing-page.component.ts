import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private newRouter : Router) { }

  ngOnInit(): void {
  }

  onFaceSnaps(): void {
    this.newRouter.navigateByUrl('facesnaps');
  }

}
