import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  handleSignup() {
    // Làm sao lấy đc value của form
    if(this.signupForm.invalid) return;
    alert(JSON.stringify(this.signupForm.value));
    this.auth.signup(this.signupForm.value).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/signin');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
