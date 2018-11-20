import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from './../models/http.client';
import { ServiceConstantConfig, SERVICE_CONSTANTS } from './../app.constants';

@Injectable()
export class DashboardService {
  constructor(@Inject(SERVICE_CONSTANTS) private  _ServiceConstantsConfig: ServiceConstantConfig,private http: HttpClient){ }
  
  
  getTilesData(){
    console.log("1st enter");
    const url = this._ServiceConstantsConfig.api['GetTilesData'];
    return this.http.get(url+'.json');
  }
}
