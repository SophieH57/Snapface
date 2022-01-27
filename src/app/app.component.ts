import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'ourson',
        description: "Ours en peluche dans l'herbe",
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 150,
        location: 'dans un champs',
      },

      {
        title: 'cheval qui se marre',
        description: "une photo de cheval qui a l'air de rire",
        imageUrl:
          'https://tse1.mm.bing.net/th?id=OIP.UGe0hDgOlhZCZJhjMiiCjwHaEK&pid=Api&P=0&w=332&h=186',
        createdDate: new Date(),
        snaps: 30,
      },

      {
        title: 'Chien à bigoudis',
        description: 'un chien avec des bigoudis sur la tête',
        imageUrl:
          'https://tse4.mm.bing.net/th?id=OIP.mUibgH7zai54OhVoxBwJIwHaE6&pid=Api&P=0&w=247&h=164',
        createdDate: new Date(),
        snaps: 60,
      },

      {
        title: 'Singe qui tire la langue',
        description: 'un singe qui se fout de ta gueule!',
        imageUrl:
          'https://tse2.mm.bing.net/th?id=OIP.RGvbOLeN8QP51IZd2pUrfwHaFS&pid=Api&P=0&w=238&h=170',
        createdDate: new Date(),
        snaps: 0,
      },

      {
        title: 'Ecureuil et mais',
        description: 'un écureuil qui mange',
        imageUrl:
          'https://tse3.mm.bing.net/th?id=OIP.Wwg5-gXddv7O6NA7mnm8iwHaDw&pid=Api&P=0&w=311&h=158',
        createdDate: new Date(),
        snaps: 0,
      },

      {
        title: 'Loutre surprise',
        description: 'une loutre surprise',
        imageUrl:
          'https://tse1.mm.bing.net/th?id=OIP.s3FgNFeNeWdMYfuefUUvXgHaE7&pid=Api&P=0&w=231&h=153',
        createdDate: new Date(),
        snaps: 0,
      },
    ];
  }
}
