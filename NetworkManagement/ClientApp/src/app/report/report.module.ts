import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report.routing.module';
import { ReportHomeModule } from './report-home/report-home.module';


@NgModule({
    declarations: [
        ReportComponent,       
    ],
    imports: [
        HttpClientModule,
        ReportRoutingModule,
        ReportHomeModule,
        FormsModule,
    ],
    exports:[
    ],
    providers: [],
})
export class ReportModule { }
