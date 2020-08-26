import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { TemplateRoutingModule } from './template.routing.module';

@NgModule({
  declarations: [
      TemplateComponent,
      TemplateHomeComponent,
  ],
  imports: [
    HttpClientModule,
    TemplateRoutingModule,
    FormsModule,
  ],
  providers: [],
})
export class TemplateModule { }
