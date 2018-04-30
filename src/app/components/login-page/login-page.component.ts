import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {ElectronService} from 'ngx-electron';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [ElectronService]
})
export class LoginPageComponent implements OnInit {
  showSpinner = false;
  username : string;
  password : string;

  usernameFormControl: FormControl = new FormControl('', [
    Validators.required
    ]);
  
  passwordFormControl: FormControl = new FormControl('', [
      Validators.required
  ]);

  login() : void {
    if(this.username && this.password){
      this.electronService.ipcRenderer.send('login', {username: this.username, password: this.password});
    } else {
      alert("Invalid credentials");
    }
  }

  signup() {
    this.router.navigate(['signup']);
  }

  constructor(private router: Router, private electronService: ElectronService, private ngZone: NgZone) { }

  ngOnInit() {
    this.electronService.ipcRenderer.on('loginResponse', (event, resp) => {
      this.ngZone.run(() => {
        if (resp.success) {
          localStorage.setItem('userId', resp.userId);
          this.router.navigate(['dashboard']);
        } else {
          alert("Invalid credentials");
        }
      })
    });
  }

}
