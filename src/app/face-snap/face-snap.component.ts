import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location?: string;

  titleButton!: string;
  snapped!: boolean;

  // constructor(title: string,
  //   description: string,
  //   imageUrl: string,
  //   createdDate: Date,
  //   snaps: number,
  //   location: string) {
  //     this.title = title;
  //     this.description = description;
  //     this.imageUrl = imageUrl;
  //     this.createdDate = createdDate;
  //     this.snaps = snaps;
  //     this.location = location
  //   }

  ngOnInit(): void {
    this.titleButton = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap() {
    if (!this.snapped) {
      this.faceSnap.snaps++;
      this.titleButton = 'Oops, un Snap!';
      this.snapped = true;
    } else {
      this.faceSnap.snaps--;
      this.titleButton = 'Oh Snap!';
      this.snapped = false;
    }
  }
}
