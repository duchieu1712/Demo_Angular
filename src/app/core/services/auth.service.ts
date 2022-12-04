import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SigninParams,SigninResult,SignupParams,SignupResult} from '../models/auth.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Ko thể sử dụng 1 property để làm biến toàn cục, bởi vì component ko thể theo dõi đc sự thay đổi của biến này
  // currentUser: any;
  currentUser = new BehaviorSubject<SigninResult | null>(null)
  // currentUser.next(value) => gán giá trị mới cho biến currentUser
  // currentUser.value => lấy giá trị của biến currentUser tại thời điểm hiện tại
  // currentUser.asObservable => Chuyển currentUser thành 1 Observable => có thể subcrible sự thay đổi của biến này

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if(user){
      this.currentUser.next(JSON.parse(user));
    }
  }
  signin(values: SigninParams): Observable<SigninResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post<SigninResult>(url, values)
  }
  signup(values: SignupParams):Observable<SignupResult> {
    const url='https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

    return this.http.post<SignupResult>(url,{ ...values,maNhom: 'GP01'});
  }

  
}
