import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // Chuyển currentUser thành 1 Observable để có thể theo dõi sự thay đổi của biến này
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: result => {
          this.currentUser = result;
        }
      })
  }
  // Lifecycle: Chạy trc khi component bị hủy
  // Tác dụng: Hủy vùng nhớ ở trên
  ngOnDestroy(): void {
    // unsubcrible currentUser
    this.currentUserSubscription?.unsubscribe()
  }
}
