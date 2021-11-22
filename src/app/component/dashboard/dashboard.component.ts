import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;
  openDash:boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  openDashboard(){
    this.openDash =  !this.openDash;
  }

}
