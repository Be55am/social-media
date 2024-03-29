import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() {
  }

  addCategoryForm: FormGroup;
  image = 'data:image/png;base64,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';

  ngOnInit() {
    this.addCategoryForm = new FormGroup({
      'label': new FormControl(null, [Validators.minLength(3), Validators.required]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'parent': new FormControl(),
      'checkbox': new FormControl(null),
    });
  }

  processFile(imageInput: any) {
    const reader = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.addEventListener('load', (event: any) => {
      this.image = event.target.result;
    });

  }

  onSubmite() {
    console.log(this.addCategoryForm.get('label').value);

     // todo when you add a subscription you need to remove the default image and do not upload it
  }

}
