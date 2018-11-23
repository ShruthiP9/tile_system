import { SERVICE_CONSTANTS } from './../../app.constants';
import { Response } from '@angular/http';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, NgModule } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  public tilesData: Array<any> = [];

  constructor(public dashboardService:DashboardService ) { }

  ngOnInit() {
    this.getTilesData();
    
  }
  getTilesData() {
    this.dashboardService.getTilesData().subscribe(res=>
      {
        this.tilesData=res.tiles;
      },
      err=> console.error(err)
    );
  }
    
  
}
