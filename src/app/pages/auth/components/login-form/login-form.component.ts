import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {CtserviceService} from '../../services/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<void>();
  public loginForm: FormGroup;
  hide: boolean = false;
  public flatlogicEmail = 'santosh@admin.com';
  public flatlogicPassword = 'Admin@123';

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.flatlogicEmail, [Validators.required, Validators.email]),
      password: new FormControl(this.flatlogicPassword, [Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    });
  }

  get f() { return this.loginForm.controls; }

  constructor(private ctService : CtserviceService,private router : Router )
  {}
  public login(): void {
    if (this.loginForm.valid) {
      this.sendLoginForm.emit();
      console.log("Inside the On submit");
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log(this.loginForm.value);
    this.ctService.login(this.f.email.value, this.f.password.value)
        .subscribe(data=>{
              this.router.navigate(['/register']);
            },
            error => {
               // this.alertService.error(error);
               this.router.navigate(['/login']);
            });
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
}
}
