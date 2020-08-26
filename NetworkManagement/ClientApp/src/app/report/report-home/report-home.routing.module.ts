import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportHomeComponent } from "./report-home.component";
import { ReportDataShowingComponent } from "./report-data-showing/report-data-showing.component";
const routes: Routes = [
    {
        path: 'home',
        component: ReportHomeComponent,  
        children:
        [{
            path:'',
            component:ReportDataShowingComponent,
        }]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        ReportHomeComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class ReportHomeRoutingModule { }