import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  location?: string;

  titleButton!: string;
  snapped!: boolean;

  constructor(
    private faceSnapService: FaceSnapsService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleButton = 'Oh Snap!';
    this.snapped = false;
    const parametreId = +this.activeRoute.snapshot.params['id'];
    this.faceSnapService.getSnapById(parametreId).subscribe({
      next: (data: FaceSnap) => {
        this.faceSnap = data;
      },
    });
  }

  onSnap() {
    if (!this.snapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap, 'snap').subscribe();
      this.titleButton = 'Oops, un Snap!';
      this.snapped = true;
    } else {
      this.faceSnapService
        .snapFaceSnapById(this.faceSnap, 'unsnap')
        .subscribe();
      this.titleButton = 'Oh Snap!';
      this.snapped = false;
    }
  }
}
