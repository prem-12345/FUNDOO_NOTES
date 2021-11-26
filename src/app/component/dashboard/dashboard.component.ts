import { Component, OnInit } from '@angular/core';
import { AuthguardServiceService } from 'src/app/services/authguardService/authguard-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;
  openDash:boolean = false;
 

  constructor(private authguardServiceService: AuthguardServiceService) { }

  ngOnInit(): void {
  }

  openDashboard(){
    this.openDash =  !this.openDash;
  }

  logOut(){
    this.authguardServiceService.logOut();
  }

}
