import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent {

  name = new FormControl('');
  price = new FormControl('');
  description = new FormControl('');
  image = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

}
