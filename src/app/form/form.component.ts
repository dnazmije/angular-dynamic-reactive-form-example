import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public myForm: FormGroup;
  public filedsMap: any = {};
  @Input() public fileds: string[];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormFileds();
    this.buildForm();
  }

  createNameField() {
    return new FormControl('', Validators.required)
  }

  createAgeField() {
    return new FormControl('', Validators.compose([Validators.required]))
  }

  createProfessionField() {
    return new FormControl('')
  }

  // add fields here to create them
  createFormFileds() {
    this.filedsMap = {
      name: this.createNameField,
      age: this.createAgeField,
      profession: this.createProfessionField,
    }
  }

  buildForm() {
    this.myForm = this.fb.group({});
      this.fileds.forEach(item => {
      try {
      this.myForm.addControl(item, this.filedsMap[item]())
      } catch (e) {}
    })
    console.log(this.myForm)
  }
}