import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateHomeComponent } from './template-home.component';
import { TemplateHomeRoutingModule } from './template-home.routing.module';



@NgModule({
    declarations: [
        TemplateHomeComponent,       
    ],
    imports: [
        HttpClientModule,
        TemplateHomeRoutingModule,
        FormsModule,
    ],
    exports:[
    ],
    providers: [],
})
export class TemplateHomeModule { }
