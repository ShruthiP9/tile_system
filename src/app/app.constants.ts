import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONSTANTS = new InjectionToken<AppConstantConfig>('app.constant');
export let SERVICE_CONSTANTS = new InjectionToken<AppConstantConfig>('app.service.constant');

export class AppConstantConfig {
	rootUrl	: string;
	components : string;
	imagesPath : string;	
}

export const APP_CONSTANTS_CONFIG: AppConstantConfig = {
	rootUrl : environment.rootUrl+'',
	components: '',
	imagesPath : environment.rootUrl+'assets/images/'
};

// Services Constants
export class ServiceConstantConfig {
	apiUrl : string;
	api: Object;	
}

export const SERVICE_CONSTANTS_CONFIG: ServiceConstantConfig = {
	apiUrl: environment.apiUrl,
	api: {
		"GetTilesData":'GetTilesData'
	}		
};
@NgModule({
	providers:[{
		provide: APP_CONSTANTS,
		useValue:APP_CONSTANTS_CONFIG
	},
	{
	provide:SERVICE_CONSTANTS,
	useValue:SERVICE_CONSTANTS_CONFIG
}
	]
})
export class AppConstantsModule{

}

