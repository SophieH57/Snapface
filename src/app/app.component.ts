import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  deuxiemeSnap!: FaceSnap;
  troisiemeSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = {
      title: 'ourson',
      description: "Ours en peluche dans l'herbe",
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'dans un champs',
    };

    this.deuxiemeSnap = {
      title: 'cheval qui se marre',
      description: "une photo de cheval qui a l'air de rire",
      imageUrl:
        'https://tse1.mm.bing.net/th?id=OIP.UGe0hDgOlhZCZJhjMiiCjwHaEK&pid=Api&P=0&w=332&h=186',
      createdDate: new Date(),
      snaps: 0,
    };

    this.troisiemeSnap = {
      title: 'Chien à bigoudis',
      description: 'un chien avec des bigoudis sur la tête',
      imageUrl:
        'https://tse4.mm.bing.net/th?id=OIP.mUibgH7zai54OhVoxBwJIwHaE6&pid=Api&P=0&w=247&h=164',
      createdDate: new Date(),
      snaps: 0,
    };
  }
}
