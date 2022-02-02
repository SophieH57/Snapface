import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-snap-face',
  templateUrl: './add-snap-face.component.html',
  styleUrls: ['./add-snap-face.component.scss'],
})
export class AddSnapFaceComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: [],
      description: [],
      imageUrl: [],
      createdDate: [],
      location: []
    })
  }

  onSubmit() {
    console.log(this.addForm.value);
  }
}
