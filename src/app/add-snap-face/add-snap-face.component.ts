import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-add-snap-face',
  templateUrl: './add-snap-face.component.html',
  styleUrls: ['./add-snap-face.component.scss'],
})
export class AddSnapFaceComponent implements OnInit {
  addForm!: FormGroup;
  fs!: FaceSnap;

  constructor(
    private fb: FormBuilder,
    private faceSnapsService: FaceSnapsService
  ) {}

  ngOnInit(): void {

    this.addForm = this.fb.group({
      title: [],
      description: [],
      imageUrl: [],
      createdDate: [],
      location: [],
      snaps: 0,
    });
  }

  onSubmit() {
    this.faceSnapsService.postSnap(this.addForm.value).subscribe();
  }
}
