import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

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

  constructor(
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.titleButton = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap() {
    if (!this.snapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap, 'snap');
      this.titleButton = 'Oops, un Snap!';
      this.snapped = true;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap, 'unsnap');
      this.titleButton = 'Oh Snap!';
      this.snapped = false;
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
