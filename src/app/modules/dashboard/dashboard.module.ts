import { HttpModule } from '@angular/http';
import { DashboardService } from './../../services/dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent} from '../../components/dashboard/dashboard.component';
import { HttpClient} from './../../models/http.client';
import {AppConstantsModule} from './../../app.constants';
import { SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from '../../routing/app.routing';
@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
  DashboardComponent
  ],
  providers:[
  HttpClient, DashboardService]
})
export class DashboardModule { }
