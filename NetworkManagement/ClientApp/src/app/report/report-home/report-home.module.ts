import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReportHomeComponent } from './report-home.component';
import { ReportHomeRoutingModule } from './report-home.routing.module';


@NgModule({
    declarations: [
        ReportHomeComponent,       
    ],
    imports: [
        HttpClientModule,
        ReportHomeRoutingModule,
        FormsModule,
    ],
    exports:[
    ],
    providers: [],
})
export class ReportHomeModule { }
