import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})

export class ProfileEditorComponent {
  profileForm = this.fb.group({
    // firstName: ['', Validators.required],
    // lastName: [''],
    menu: this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  constructor (private fb: FormBuilder ) { }

  onSubmit() {
    //console.warn(this.profileForm.value);
    console.warn(this.profileForm.value.menu);
  }

  /*updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }*/

}
