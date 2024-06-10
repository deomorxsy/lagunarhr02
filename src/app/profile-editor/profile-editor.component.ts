import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MenuService } from '../shared/service/menu.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})

export class ProfileEditorComponent {

  private apiBaseUrl = 'http:localhost:3000/api/menu/items/';

  profileForm = this.fb.group({
    getVerb: [''],
    getAllVerb: [''],
    putVerb: ['',],
    delVerb: [''],
    menu: this.fb.group({ //createVerb
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

  constructor (
    private fb: FormBuilder,
    private apiService: MenuService,
    private http: HttpClient,
  ) { }

  onSubmit() {
    //console.warn(this.profileForm.value);
    console.warn(this.profileForm.value.menu);
  }



  onGet(): Observable<Object> {
    const newGet = this.profileForm.value.getVerb;
    console.warn(`onGet method value: ${newGet}\nonGet method type: ${typeof newGet}`)
    const url = this.apiBaseUrl + 1
    console.warn(this.http.get(url))
    return this.http.get(url)
    //this.apiService.getItem(newGet);
  }
  onGetAll(): void {
    //const newGetAll = this.profileForm.value.getAllVerb;
    //console.warn("onGet method state:" + newGetAll)
  }
  onPut(): void {
    //const newPut = this.profileForm.value.putVerb;
    //console.warn("onGet method state:" + newPut)
  }
  onDel(): void {
    //const newDel = this.profileForm.value.delVerb;
    //console.warn("onGet method state:" + newDel)
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
