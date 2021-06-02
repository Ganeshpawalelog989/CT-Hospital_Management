import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';
@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
  @Output() sendSignForm = new EventEmitter<void>();
  public regiForm: FormGroup;
  submitted = false;
  register: any;
  public ngOnInit(): void {
    this.regiForm = new FormGroup({
      Firstname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]),
      Lasttname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[a-zA-Z]+')]),
      EmpID : new FormControl('', [Validators.required]),
      date : new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),

      
      password: new FormControl('', [Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    });

     
  }

  public sign(): void {
    if (this.regiForm.valid) {
      this.sendSignForm.emit();
    }
  }
}
