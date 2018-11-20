
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Translate for root module
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//Routing for root module
import { RoutingModule } from './routing/app.routing';
import { AppComponent } from './app.component';
import { Translate } from './translate/app.translate';
//import { DashboardService } from './services/dashboard.service';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,    
    Translate
    ],
  imports: [
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
    loader: {
     provide: TranslateLoader,
     useFactory: HttpLoaderFactory,
     deps: [HttpClient]
    }
    })
  ],
  //providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
