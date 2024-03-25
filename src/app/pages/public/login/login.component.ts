import { ResponseCode } from './../../../model/enums';
import { loginRequest, loginInfo } from './../../../model/authentication';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthenticationService } from '../../../services/authentication.service';
import { jwtDecode } from 'jwt-decode';
import { Router, RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatProgressSpinnerModule],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginfrom!: FormGroup<any>;
  loading: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginfrom = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })

  }

  signup() {
    this.router.navigate(['/register'])

  }



  register() {
    this.loading = true;
    const value = this.loginfrom.value;

    const login: loginRequest = {
      userName: value.username,
      password: value.password,
      rememberMe: false
    }
    this.authService.login(login).subscribe({
      next: res => {
        if (res.responseCode === ResponseCode.Success) {

          const token: any = jwtDecode(res.token ?? "")
          console.log("login", token);
          let data: loginInfo = {
            AccountTypeId: token.AccountTypeId, userName: token.unique_name, userId: token.nameid, token: res.token
          }
          this.authService.setLoginInfo(data);
          this.loginfrom.reset();

          this.authService.validateAddress().subscribe({
            next:res2 => {
              if(res2.responseCode == ResponseCode.Success)
              if (!res2.data) {
                console.log('go to address validation', res2);
              }else{
                this.router.navigate(['/app']);
              }

            }
          })





        }else{
          console.log("res", res);
        }

      }, error(err) {
        console.log(err);

      },



    }).add(() => this.loading = false);


  }

}
