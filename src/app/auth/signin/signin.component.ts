import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl("", [
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(20)
    ]),
    matKhau: new FormControl("", [Validators.required])
  })
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleSignin() {
    // Đánh dấu tất cả input có trạng thái touched thành true
    this.signinForm.markAllAsTouched()
    if(this.signinForm.invalid) return;
    this.auth.signin(this.signinForm.value).subscribe({
      next: result => {
        // Cập nhật kết quả trả về cho biến currentUser trong authService
        this.auth.currentUser.next(result);
        // Lưu kết qả trả về vào localStorage
        localStorage.setItem('user',JSON.stringify(result));
        
        const redirectUrl = (window as any).PATH;
        if(redirectUrl){
          (window as any).PATH = undefined;
          this.router.navigateByUrl(redirectUrl);
        }else{
          this.router.navigateByUrl('/');
        }

        this.router.navigateByUrl('/');
      },
      error: error => {
        console.log(error.error);
      }
    })
  }
}
