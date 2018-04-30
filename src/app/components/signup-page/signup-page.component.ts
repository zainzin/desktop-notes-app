import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  providers: [ElectronService]
})
export class SignupPageComponent implements OnInit {
  showSpinner = false;
  username : string
  password : string
  
  usernameFormControl: FormControl = new FormControl('', [
    Validators.required
    ]);
  
    passwordFormControl: FormControl = new FormControl('', [
      Validators.required
    ]);

  constructor(private electronService: ElectronService, 
    private router: Router, 
    private ngZone: NgZone) { }

  ngOnInit() {
    this.electronService.ipcRenderer.on('signupSuccess', () => {
      this.ngZone.run(() => {
        this.showSpinner = false;
        this.router.navigate(['dashboard']);
      })
    });
    this.electronService.ipcRenderer.on('signupError', (event, error) => {
      this.ngZone.run(() => {
        this.showSpinner = false;
        if (error.code === 11000) {
            alert("This username already exists");
        } else {
            alert(error.message);
        }
      })
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  signup() {
    if (this.username && this.password) {
      this.showSpinner = true;
      this.electronService.ipcRenderer.send('signup', {
        username: this.username,
        password: this.password
      });
    }
  }
}
