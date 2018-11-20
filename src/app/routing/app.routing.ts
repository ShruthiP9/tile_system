import {ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {DashboardComponent} from './../components/dashboard/dashboard.component';


const appRoutes: Routes =[
{
	path:'dashboard',
	loadChildren:'app/modules/dashboard/dashboard.module#DashboardModule'
},
{
	path: '',
	redirectTo:'dashboard',
	pathMatch:'full'
},
{
	path: '**',
	redirectTo:'dashboard',
	pathMatch:'full'
}
];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

const DashboardRoute: Routes = [
{
	path:'',
	component:DashboardComponent
}
];

export const DashboardRoutingModule: ModuleWithProviders=RouterModule.forChild(DashboardRoute);


