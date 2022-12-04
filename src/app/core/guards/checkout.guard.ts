import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('route', route);
    console.log('state', state);

    const currentUser =  this.auth.currentUser.value;

    if(currentUser){

      return true;
    }
    // Khi ko đủ điều kiện truy cập vào route, trước khi chuyển người dùng về trang signin , cần lưu lại url hiện tại để có thể redirect người dùng về trang này sau khi đăng nhập
    (window as any).PATH = state.url;
    // Chuyển về trang đăng nhập nếu chưa đăng nhập
    this.router.navigateByUrl('/signin');
    return false;
  }
  
}
